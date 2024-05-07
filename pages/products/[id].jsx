import Layout from "@/components/layout/index";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/functions/firebase";



const NFT = ({nft}) => {
console.log("nft" ,nft)

    return (
        <Layout>
      
         {nft?.title}
        
    </Layout>
    )
}

const getNFTbyId = async (id) => {
    const nftDocument = doc(db, `products`, id);
    const nft = await getDoc(nftDocument);

    if (!nft.exists()) {
        return false;
    }

    return nft.data();
}

NFT.getInitialProps = async (ctx) => {
    const nftData = await getNFTbyId(ctx.query.id)

    return {
        nft : nftData,
    }
}
export default NFT;