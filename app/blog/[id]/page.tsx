import Layout from "@/components/Layout";
import { getAllPostIds , getPostData } from "@/app/utils/posts";
import Head from "next/head";
import Date from "@/components/date";
import utils from "@/styles/utils.module.css"

interface PostData {
    id: string;
    title: string;
    date: string;
    contentHtml: string;
  }
  
  interface PostProps {
    params: {
      id: string;
    };
  }

export default async function Post({params}:PostProps){
    const postData: PostData = await getPostData(params.id);
    
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
            <h1 className={`${utils.headingXl} ${utils.contentcenter}`}>{postData.title}</h1>
            <div className={utils.contentcenter}>
            <Date dateString={postData.date}/>
            </div>
            <br />
            <div dangerouslySetInnerHTML={{__html : postData.contentHtml}}/>
            </article>
        </Layout>
    )
}

export async function generateStaticParams() {
    const paths = getAllPostIds();
    return paths.map((path) => ({
      id: path.params.id,
    }));
  }