

export default function Title({title , fontSize}) {
    return (
        <h1 className={`${fontSize} text-[var(--color-primary)] font-space font-bold uppercase`}>{title}</h1>
    )
}
