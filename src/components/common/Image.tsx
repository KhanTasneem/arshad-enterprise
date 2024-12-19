
type IProps = {
    src: string;
    alt: string;
}
export const Image: React.FC<IProps> = (props: IProps) => {
    return(
        <>
        <img {...props} className="img-fluid"/>
        </>
    )
}