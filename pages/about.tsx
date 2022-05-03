import { MainLayout } from "../components/layouts/MainLayout"
import { DarkLayout } from "../components/layouts/DarkLayout"


export default function AboutPage() {
  return (
    <>
      <h1 className={'title'}>
        About
      </h1>

      <p className={'description'}>
        Holis
        <code className={'code'}>pages/index.js</code>
      </p>
    </>
  )
}

AboutPage.getLayout = function getLayout(page: JSX.Element) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  )
}