import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

export default function Login() {
    const { data: session } = useSession();
    const router = useRouter(); //

    if (session) {
        router.push("/")
    } else {
        return (
            <div>
                you are not login yet <br />
                <button onClick={() => signIn('kakao')}>로그인</button>
            </div>
        );
    }
}
