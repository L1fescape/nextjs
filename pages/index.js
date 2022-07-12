import dynamic from 'next/dynamic'

const HomeWithNoSSR = dynamic(() => import('../components/home').then(() => {
  return new Promise(resolve => {
    setTimeout(resolve, 2000)
  })
}), {
  ssr: false
})

export default HomeWithNoSSR
