const MarkdownProcessor = {
  p: (props: any) => (
    <p className="text-sm text-white/90 mb-[14px]" {...props} />
  ),
  h1: (props: any) => (
    <h1 className="text-4xl font-semibold text-white mb-4" {...props} />
  ),
  h2: (props: any) => (
    <h2 className="text-3xl font-semibold text-white mb-3" {...props} />
  ),
  h3: (props: any) => (
    <h3 className="text-2xl font-medium text-white mb-3" {...props} />
  ),
  h4: (props: any) => (
    <h4 className="text-xl font-medium text-white mb-2" {...props} />
  ),
  h5: (props: any) => (
    <h5 className="text-lg font-medium text-white mb-2" {...props} />
  ),
  h6: (props: any) => (
    <h6 className="text-base font-medium text-white mb-2" {...props} />
  ),
  strong: (props: any) => (
    <strong className="font-semibold text-white" {...props} />
  ),
  u: (props: any) => <u className="underline text-white" {...props} />,
  ul: (props: any) => (
    <ul
      className="list-disc pl-5 text-sm mb-0 last:mb-2 text-white/90"
      {...props}
    />
  ),
  ol: (props: any) => (
    <ol
      className="list-decimal pl-5 text-sm mb-0 last:mb-2 text-white/90"
      {...props}
    />
  ),
  li: (props: any) => (
    <li className="text-sm mb-0 last:mb-2 text-white/90" {...props} />
  ),

  blockquote: (props: any) => (
    <blockquote className="border-l-4 pl-4 border-l-[#0B1C2C] space-y-0">
      <span className="italic text-white/70" {...props} />
    </blockquote>
  ),

  a: (props: any) => (
    <a
      className="underline mb-2 text-[#00B4FF] hover:text-white transition-colors duration-300"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  ),

  code: (props: any) => {
    const content = props.children || '';

    const isSingleLine =
      typeof content === 'string' && content.trim().split('\n').length === 1;

    return (
      <code
        className={`${
          isSingleLine
            ? 'bg-[#0B1C2C] border border-[#0F2238] py-0 px-1 rounded-[4px] text-white/90 text-sm !font-mono'
            : ''
        }`}
      >
        {props.children}
      </code>
    );
  },

  pre: (props: any) => (
    <pre
      className="bg-[#0B1C2C] border border-[#0F2238] py-4 px-5 rounded-xl overflow-x-auto mb-2 text-white/90 text-sm !font-mono"
      {...props}
    />
  ),
  hr: () => <hr className="border-[#0F2238] mb-2" />,

  // Table components
  table: (props: any) => (
    <div className="overflow-x-auto mb-4">
      <table
        className="w-full border-collapse border border-[#0F2238] rounded-lg"
        {...props}
      />
    </div>
  ),
  thead: (props: any) => <thead className="bg-[#0B1C2C]" {...props} />,
  tbody: (props: any) => <tbody {...props} />,
  tr: (props: any) => <tr className="border-b border-[#0F2238]" {...props} />,
  th: (props: any) => (
    <th
      className="border border-[#0F2238] px-4 py-2 text-left text-sm font-semibold text-white"
      {...props}
    />
  ),
  td: (props: any) => (
    <td
      className="border border-[#0F2238] px-4 py-2 text-sm text-white/90"
      {...props}
    />
  ),

  // Image component
  img: (props: any) => {
    return (
      <img
        className="w-full max-w-full h-auto rounded-lg my-4 border border-[#0F2238]"
        loading="lazy"
        {...props}
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.style.display = 'none';
          // Optionally, you can replace with a placeholder
          // target.src = '/placeholder-image.png';
        }}
      />
    );
  },
};

export default MarkdownProcessor;
