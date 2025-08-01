import { useEffect, useState } from 'react';
import { Assets, Texture } from 'pixi.js';

export const useTexture = (src: string) => {
  const [texture, setTexture] = useState<Texture | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadTexture = async () => {
      try {
        setLoading(true);
        setError(null);
        const loadedTexture = await Assets.load(src);
        setTexture(loadedTexture as Texture);
      } catch (err) {
        console.error('Failed to load texture:', err);
        setError(err instanceof Error ? err.message : 'Failed to load texture');
      } finally {
        setLoading(false);
      }
    };

    loadTexture();
  }, [src]);

  return { texture, loading, error };
};
