import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import loadContent from "../../loadContent";
import { PageMain } from "../../../Components/PageMain"

export default function Inform() {
    const { lang } = useParams();
    const [innerHTML, setInner] = useState('');
    useEffect(() => {
        loadContent('/pages/services/inform', lang, setInner);
    }, [lang]);
    return (
        <PageMain dangerouslySetInnerHTML={{ __html: innerHTML }} />
    )
}