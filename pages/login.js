import {signIn, signOut, useSession} from 'next-auth/react'

export default function Login(){
    const {data: session} = useSession();

    if(session){
        return(
            <div>
                {session.user?.name}반갑습니다. <br/>
                <button onClick={() => signOut()}>로그아웃</button>
            </div>
        )
    }
    return (
        <div>
            you are not login yet <br/>
            <button onClick={() => signIn("kakao")}>로그인</button>
        </div>
    )
}