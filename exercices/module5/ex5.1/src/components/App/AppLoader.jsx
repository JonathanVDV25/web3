import { ProviderWrapper as CountsProviderWrapper } from "Contexts/CountersContext"
import App from "./App"

const AppLoader = () => {
    return (
        <CountsProviderWrapper >
            <App />
        </CountsProviderWrapper>
    )
}

export default AppLoader