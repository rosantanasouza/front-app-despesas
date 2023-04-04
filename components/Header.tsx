import Link from 'next/link';
import Image from 'next/image';
import iconeMoney from '../public/assets/money.svg';

export default function Header() {
    return (
        <>
            <header className="flex justify-evenly items-center w-full p-5">

                <div className='flex items-center gap-2'>
                    <Image src={iconeMoney} width={70} height={70} alt='icone cifrão' />

                    <h1 className="text-4xl font-mono font-bold">Controle Financeiro</h1>
                </div>

                <ul className='flex justify-around items-center font-mono text-xl w-96'>
                    <li>
                        <Link href='/'>Dashboard</Link>
                    </li>
                    <li>
                        <Link href='lojas'>Lojas</Link>
                    </li>
                    <li>
                        <Link href='configuracoes'>Configurações</Link>
                    </li>
                </ul>

            </header>
        </>
    )
}




