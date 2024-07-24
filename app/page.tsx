import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "@/components/Layout";
import utils from "@/styles/utils.module.css";
import { getSortedPostsData } from "@/app/utils/posts";
import Date from "@/components/date";

// 定义 Post 类型
interface Post {
  id: string;
  date: string;
  title: string;
}

export default async function Home() {
  const allPostsData: Post[] = getSortedPostsData();

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utils.headingMd}>
        <p className={utils.indexintroudction}>[Hello,我是ReChen,这是我的博客]</p>
        <p>
          该博客主要用于记录前端学习过程的学习进度
          <br />
          next.js学习详情请查看--<a href="https://www.nextjs.cn/docs/getting-started">our Next.js tutorial</a>
        </p>
      </section>
      <section className={`${utils.headingMd} ${utils.padding1px}`}>
        <h2 className={utils.headingLg}>博客目录</h2>
        <ul className={utils.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utils.listItem} key={id}>
              {id}. <Link href={`/blog/${id}`}>{title}</Link>
              <br />
              <small className={utils.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
