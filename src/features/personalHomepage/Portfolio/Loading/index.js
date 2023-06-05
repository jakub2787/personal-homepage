import { Info, LoadingSpinner } from "./styled";

const Loading = () => {
    return (
        <>
            <Info>Please wait, projects are being loaded...</Info>
            <LoadingSpinner spinner/>
        </>
    )
};

export default Loading;