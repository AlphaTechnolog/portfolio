import TypeWriter from "./TypeWriter";

const texts: string[] = [
  "make useful and complex programs.",
  "design beautiful and modern UIs.",
  "can extract page data by doing web scrapping.",
  "create beautiful and useful mobile applications.",
  "make useful web applications.",
  "use NixOS as my daily driver <3."
]

export default function Description() {
  return (
    <p className="text-xl select-none h-40 sm:h-20 md:h-10 lg:h-10">
      Freelance Fullstack Developer. +5 years coding.
      I {" "}
      <TypeWriter texts={texts}>
        {({ text }: { text: string }) => (
          <span class="select-none">
            {text}
            <span class="animate-cursor-beam text-primary">|</span>
          </span>
        )}
      </TypeWriter>
    </p>
  )
}
