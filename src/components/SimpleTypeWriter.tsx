import TypeWriter, { type Props as TypeWriterProps } from "./TypeWriter";

type Props = {
  text: string | string[];
  cursorColor?: string;
  extraProps: Record<string, any>;
  typeWriterProps?: TypeWriterProps;
}

export default function SimpleTypeWriter({ text, cursorColor = 'primary', extraProps, typeWriterProps }: Props) {
  return (
    <TypeWriter {...typeWriterProps || ({} as TypeWriterProps)} texts={typeof text === 'string' ? [text] : text}>
      {({ text }: { text: string }) => (
        <p {...extraProps}>
          <span class="select-none">{text}</span>
          <span class={`animate-cursor-beam text-${cursorColor}`}>|</span>
        </p>
      )}
    </TypeWriter>
  )
}
