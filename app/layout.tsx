import './globals.css'; // 导入全局样式
import Layout from '@/components/Layout'; // 导入你的布局组件

export default function RootLayout({children}: {children: React.ReactNode;}) {
    return (
        <html lang="zh-CN">
            <body>
                {children}
            </body>
        </html>
    );
}
