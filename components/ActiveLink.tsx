import { CSSProperties, FC } from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Interface } from 'readline';
const style: CSSProperties = {
    color: '#0070f3',
    textDecoration: 'underline'
}
interface Props  {
    texto: string;
    href: string;
  };
export const ActiveLink: FC<Props>= ({ texto, href }) => {
    const { asPath } = useRouter();
    return (
        <Link href={href}>
            <a style={asPath === href ? style : undefined}>{texto}</a>
        </Link>
    )
}
