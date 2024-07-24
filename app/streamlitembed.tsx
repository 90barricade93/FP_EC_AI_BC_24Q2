// Embed a steamlit App into the personalPage as a component
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

export default function StreamlitEmbed() {
    const { data: session, status } = useSession();
    const router = useRouter();

    return (
        <>
            {status === "authenticated" && (
                <div className="flex items-center space-x-2">
                    <iframe
                        src="https://alfred-ai-app-app-crwmq4aabhq3lybuf7ujvo.streamlit.app/?embed=true"
                        style={{ height: '525px', width: '860px' }}
                    />
                </div>
            )}
        </>
    );
}

