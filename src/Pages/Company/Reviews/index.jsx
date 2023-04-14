import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { PageMain } from "../../../Components/PageMain";
import loadContent from "../../loadContent";

export default function Reviews() {
    const { lang } = useParams();
    const [innerHTML, setInner] = useState('');
    useEffect(() => {
        loadContent('/pages/company/reviews', lang, setInner);
    }, [lang]);
    return (
        <PageMain dangerouslySetInnerHTML={{ __html: innerHTML }} />
    )
}