import Layout from "@/components/layout";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function EditProductPage() {
    const router = useRouter();
    const {id} = router.query;
    useEffect(() => {
        axios.get('/api/products?id='+id)
    }, [id]);
    return (
        <Layout>
            Edit product form here
        </Layout>
    )
}