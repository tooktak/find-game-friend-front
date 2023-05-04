import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Index() {
    const router = useRouter();

    useEffect(() => {
        router.push('/'); // 메인 페이지로 리다이렉트합니다.
    }, []);

    return null; // 빈 페이지를 렌더링합니다.
}