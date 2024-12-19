import Typography from '@mui/material/Typography';

type IProps = {
    children: string;
    align?: "left" | "center" | "right";
}
export const BoldHeading: React.FC<IProps> = (props: IProps) => {
    const { children, align="left" } = props;
    return (
        <>
            <Typography variant='h3' fontWeight='bold' align={align}>{children}</Typography>
        </>
    )
}