import dynamic from 'next/dynamic'

const HomeWithNoSSR = dynamic(() => import('../components/home').then((component) => {
  return new Promise(resolve => {
    setTimeout(() => resolve(component), 2000)
  })
}), {
  ssr: false
})

export default HomeWithNoSSR
