// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { ConstructorFragment } from "ethers/lib/utils";

export default function handler(req, res) {
  const tokenId = req.query.tokenId;
   
  const name = `Crypto Dev #${tokenId}`;
  const description = "CryptoDevs is an NFT Collection for Web3 Developers";
  const image_url =  "https://raw.githubusercontent.com/LearnWeb3DAO/NFT-Collection/main/my-app/public/cryptodevs/";


  res.status(200).json({
    name: "Crypto Dev #" + tokenId,
    description: "Crypto Dev is a collection of developers in crypto",
    image: image_url + tokenId + ".svg",
  });

}
