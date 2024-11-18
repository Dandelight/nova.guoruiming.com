import {
  type Component,
  createMemo,
  type ParentComponent,
  type JSXElement,
  createSignal,
  Show,
  onMount,
} from "solid-js";
import { MDXProvider } from "solid-mdx";

const styles = {
  paragraph: {
    marginTop: "1rem",
  },
  orderedList: {
    listStyleType: "decimal",
  },
  unorderedList: {
    listStyleType: "square",
  },
  listItem: {
    marginLeft: "1.5rem",
  },
  blockquote: {
    margin: "2rem 0",
    paddingLeft: "0.5rem",
    fontWeight: 500,
    fontStyle: "italic",
    display: "grid",
    gridTemplateColumns: "max-content 1fr",
  },
  blockquoteSpan: {
    width: "1rem",
  },
  blockquoteContent: {
    "& > p": { marginTop: 0 },
  },
  preWrapper: {
    margin: "1rem 0",
  },
  preHeader: {
    backgroundColor: "#000",
    color: "#fff",
    display: "flex",
    justifyContent: "space-between",
    padding: "0 0.5rem",
    fontSize: "0.875rem",
    lineHeight: 1,
  },
  heading: {
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    scrollMarginTop: "2rem",
  },
  heading2: {
    fontSize: "1.5rem",
    lineHeight: "2rem",
    margin: "2rem 0 1rem",
  },
  heading3: {
    fontSize: "1.25rem",
    lineHeight: "2rem",
    margin: "2rem 0 1rem",
  },
  heading4: {
    fontSize: "1.125rem",
    lineHeight: "1rem",
    margin: "2rem 0 1rem",
  },
  headingLink: {
    position: "relative",
    top: "1px",
  },
  link: {
    textDecoration: "underline",
    textUnderlineOffset: "2px",
  },
  postImage: {
    width: "100%",
  },
  aside: {
    borderLeft: "2px solid #000",
    paddingLeft: "0.5rem",
    marginTop: "1rem",
  },
  asideTitle: {
    textTransform: "uppercase",
    fontSize: "0.875rem",
    lineHeight: 1,
    fontWeight: 500,
    userSelect: "none",
  },
};

const P: ParentComponent = (props) => (
  <p style={styles.paragraph}>{props.children}</p>
);

const Ol: ParentComponent = (props) => (
  <ol style={styles.orderedList}>{props.children}</ol>
);

const Ul: ParentComponent = (props) => (
  <ul style={styles.unorderedList}>{props.children}</ul>
);

const Li: ParentComponent = (props) => (
  <li style={styles.listItem}>{props.children}</li>
);

export const Blockquote: ParentComponent = (props) => (
  <blockquote style={styles.blockquote}>
    <span style={styles.blockquoteSpan}>{"> "}</span>
    <div style={styles.blockquoteContent}>{props.children}</div>
  </blockquote>
);

const Pre: ParentComponent<{ lang: string; lines?: string; file?: string }> = (
  props
) => {
  const [copied, setCopied] = createSignal(false);
  let ref!: HTMLPreElement;

  const onCopy = () => {
    setCopied(true);
    navigator.clipboard.writeText(ref.innerText);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  return (
    <div style={styles.preWrapper}>
      <div style={styles.preHeader}>
        <Show when={props.file} fallback={<span aria-hidden />}>
          <span>{props.file}</span>
        </Show>
        <button type="button" onClick={onCopy}>
          {copied() ? "Copied!" : "Copy code"}
        </button>
      </div>
      <pre ref={ref} class={`language-${props.lang}`} data-line={props.lines}>
        {props.children}
      </pre>
    </div>
  );
};

const headingLink = (children: JSXElement) =>
  children?.toString().toLowerCase().replaceAll(" ", "-").replaceAll(",", "");

const HeadlineLink: Component<{ link: string; size: string }> = (props) => {
  return (
    <a href={props.link} style={styles.headingLink}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        style={{ width: props.size, height: props.size, fill: "none" }}
      >
        <title>link</title>
        <path
          d="M9.52051 14.4359L14.4335 9.52283"
          stroke="currentColor"
          stroke-width="3"
          stroke-linecap="round"
        />
        <path
          d="M12.5685 15.1086C13.3082 16.249 13.1108 17.418 12.2563 18.2725L9.26109 21.2678C8.28269 22.2462 6.69638 22.2462 5.71798 21.2678L2.73185 18.2816C1.75345 17.3032 1.75345 15.7169 2.73185 14.7385L5.72706 11.7433C6.429 11.0413 7.76312 10.636 8.90958 11.4662M15.1083 12.5688C16.2487 13.3085 17.4177 13.1111 18.2722 12.2566L21.2674 9.26138C22.2458 8.28297 22.2458 6.69666 21.2674 5.71825L18.2813 2.7321C17.3029 1.75369 15.7166 1.75369 14.7382 2.7321L11.743 5.72733C11.041 6.42927 10.6357 7.7634 11.4659 8.90986"
          stroke="currentColor"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </a>
  );
};

const H2: ParentComponent = (props) => (
  <h2
    id={headingLink(props.children)}
    style={{ ...styles.heading, ...styles.heading2 }}
  >
    {props.children}
    <HeadlineLink size="1.25rem" link={`#${headingLink(props.children)}`} />
  </h2>
);

const H3: ParentComponent = (props) => (
  <h3
    id={headingLink(props.children)}
    style={{ ...styles.heading, ...styles.heading3 }}
  >
    {props.children}
    <HeadlineLink size="1rem" link={`#${headingLink(props.children)}`} />
  </h3>
);

const H4: ParentComponent = (props) => (
  <h4
    id={headingLink(props.children)}
    style={{ ...styles.heading, ...styles.heading4 }}
  >
    {props.children}
    <HeadlineLink size="0.75rem" link={`#${headingLink(props.children)}`} />
  </h4>
);

const A: ParentComponent<{ href: string }> = (props) => {
  const isLocal = createMemo(() =>
    ["/", "./", "#"].some((s) => props.href.startsWith(s))
  );

  return (
    <a href={props.href} target={isLocal() ? "" : "_blank"} style={styles.link}>
      {props.children}
    </a>
  );
};

function gridCellDimensions() {
  const element = document.createElement("div");
  element.style.position = "fixed";
  element.style.height = "var(--line-height)";
  element.style.width = "1ch";
  document.body.appendChild(element);
  const rect = element.getBoundingClientRect();
  document.body.removeChild(element);
  return { width: rect.width, height: rect.height };
}

export const PostImage: Component<{
  src: string;
  alt: string;
  attr?: JSXElement;
  class?: string;
}> = (props) => {
  let ref!: HTMLImageElement;

  onMount(() => {
    const cell = gridCellDimensions();
    function setHeightFromRatio() {
      const ratio = ref.naturalWidth / ref.naturalHeight;
      const rect = ref.getBoundingClientRect();
      const realHeight = rect.width / ratio;
      const diff = cell.height - (realHeight % cell.height);
      ref.style.setProperty("padding-bottom", `${diff}px`);
    }

    if (ref.complete) {
      setHeightFromRatio();
    } else {
      ref.addEventListener("load", () => {
        setHeightFromRatio();
      });
    }
  });

  return (
    <div>
      <img
        ref={ref}
        src={props.src}
        alt={props.alt}
        style={styles.postImage}
        class={props.class}
      />
      {props.attr}
    </div>
  );
};

export const Aside: ParentComponent = (props) => (
  <aside style={styles.aside}>
    <div style={styles.asideTitle}>Aside</div>
    <div>{props.children}</div>
  </aside>
);

const components = {
  a: A,
  p: P,
  li: Li,
  ol: Ol,
  ul: Ul,
  blockquote: Blockquote,
  pre: Pre,
  h2: H2,
  h3: H3,
  h4: H4,
};

const MarkdownProvider: ParentComponent = (props) => {
  return <MDXProvider components={components}>{props.children}</MDXProvider>;
};

export default MarkdownProvider;
