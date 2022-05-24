import '../public/css/globals.css'
import Head from 'next/head'
import Script from 'next/script'
import {useEffect, useState, useRef} from 'react'

export default function App ({Component, pageProps}){
    const [addScripts, setAddScripts] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setAddScripts(true)
        }, 2000)
    }, [])

    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no" />
                <title>CORK Admin Template - Analytics Dashboard</title>
                <link rel="icon" type="image/x-icon" href="/favicon.ico" />
                <Script src="/assets/js/loader.js"></Script>                
            </Head>
            {/* <Loader /> */}
            <Component className = "po-rel" style = {{zIndex: 0}} {...pageProps} />

            {(
                (addScripts)
                ? (
                    <>
                        <Script async src="/assets/js/libs/jquery-3.1.1.min.js"></Script>
                        <Script async src="/bootstrap/js/popper.min.js"></Script>
                        <Script async src="/bootstrap/js/bootstrap.min.js"></Script>
                        <Script async src="/plugins/perfect-scrollbar/perfect-scrollbar.min.js"></Script>
                        <Script async src="/assets/js/app.js"></Script>
                        <Script async src='/assets/js/init.js'></Script>
                        <Script async src="/assets/js/custom.js"></Script>

                        {/* <Script async src="/plugins/apex/apexcharts.min.js"></Script> */}
                        {/* <Script async src="/assets/js/dashboard/dash_2.js"></Script> */}
                    </>
                )
                : <></>
            )}
        </>
    )
}

const Loader = () => {
    const loader = useRef()

    useEffect(() => {
        setTimeout(() => {
            loader.current.remove()
        }, 3000)
    }, [])

    return (
        <div ref = {loader} id="load_screen">
            <div className="loader">
                <div className="loader-content">
                    <div className="spinner-grow align-self-center"></div>
                </div>
            </div>
        </div>
    )
}