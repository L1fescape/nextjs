import dynamic from 'next/dynamic'

const HomeWithNoSSR = dynamic(() => import('../components/home'), {
  ssr: false
})

export default HomeWithNoSSR
