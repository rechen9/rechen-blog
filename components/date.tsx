import { parseISO, format } from "date-fns";
//parseISO：用于将ISO 8601格式的字符串解析为JavaScript的Date对象。
//format：用于将Date对象格式化为指定的字符串格式。

// 定义组件的 props 接口
interface DateProps {
    dateString: string;
  }

  export default function Date({ dateString }: DateProps) {
    // 检查 dateString 是否存在且不为空
    if (!dateString) {
        console.error("Invalid date string:", dateString);
        return <time>Invalid Date</time>;
    }

    let date;
    try {
        date = parseISO(dateString);
        if (isNaN(date.getTime())) {
            throw new Error("Invalid date format");
        }
    } catch (error) {
        console.error(`Error parsing date string: ${dateString}`, error);
        return <time>Invalid Date</time>;
    }

    return <time dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>;
}