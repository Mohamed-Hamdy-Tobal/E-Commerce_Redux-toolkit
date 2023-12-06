import { Alert } from "react-bootstrap"

export const Error = () => {
    return (
        <div className="d-flex justify-content-center sec-padd">
            <Alert key={'danger'} variant={'danger'}>
            Sorry no products match your search ... Clear the filter and try again 😊
            </Alert>
        </div>
    )
}
