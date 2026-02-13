export const PolicyScreen = ({policy}) => {
    return (
        <div className="card m-3">
            <ul className="list-group list-group-flush">
                <li className="list-group-item list-group-item-info"><strong>Numero:</strong> {policy.PolicyNumber}</li>
                <li className="list-group-item list-group-item-light"><strong>Compañía:</strong> {policy.WritingCarrier}</li>
                <li className="list-group-item list-group-item-light"><strong>Fecha efectiva:</strong> {policy.EffectiveDate.substring(0,10)}</li>
                <li className="list-group-item list-group-item-light"><strong>Fecha expiración:</strong> {policy.ExpirationDate.substring(0,10)}</li>
                <li className="list-group-item list-group-item-light"><strong>Agente:</strong> {policy.AgentName}</li>
            </ul>
        </div>
    )
}