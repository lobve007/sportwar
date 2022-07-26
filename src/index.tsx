import React, { Suspense, useContext, lazy } from "react";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { AppContext, AppContextProvide } from "./context/AppContext";
import { createRoot } from 'react-dom/client';
import { Web3ReactProvider } from "@web3-react/core";
import { providers } from "ethers";
import PageHeader from "./components/Header";
import PageFooter from "./components/Footer";
import Banner from "./components/Banner";
// import './utils/rem';
import './normalize.scss';
import './common.scss';


// 路由
const Index = lazy(() => import('./pages/index'));
const RoadMap = lazy(() => import('./pages/roadMap'));
const My = lazy(() => import('./pages/my'));
const Donation = lazy(() => import('./pages/donation'));
const WhiteList = lazy(() => import('./pages/whiteList'));
const UpdateNft = lazy(() => import('./pages/updatenft'));
const Wiki = lazy(() => import('./pages/wiki'));
const Demo = lazy(() => import('./pages/demo'));
const Mining = lazy(() => import('./pages/mining'));
const Nft = lazy(() => import('./pages/mining/nft'));
const Lp = lazy(() => import('./pages/mining/lp'));


function getLibrary(provider: any): providers.Web3Provider {
  const library = new providers.Web3Provider(provider, "any");
  library.pollingInterval = 15000;
  return library;
}

createRoot(document.getElementById('root') as HTMLElement).render(<React.StrictMode>
  <Web3ReactProvider getLibrary={getLibrary}>
    <AppContextProvide>
      <Router>
        <PageHeader />
        <Banner />
        <main>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/demo" element={<Demo />} />
              <Route path="/" element={<Index />} />
              <Route path="/roadmap" element={<RoadMap />} />
              <Route path="/my" element={<My />} />
              <Route path="/donation" element={<Donation />} />
              <Route path="/whiteList" element={<WhiteList />} />
              <Route path="/updatenft" element={<UpdateNft />} />
              <Route path="/wiki" element={<Wiki />} />
              <Route path="/mining" element={<Mining />} />
              <Route path="/mining/nft" element={<Nft />} />
              <Route path="/mining/lp" element={<Lp />} />
            </Routes>
          </Suspense>
        </main>
        <PageFooter />
      </Router>
    </AppContextProvide>
  </Web3ReactProvider>
</React.StrictMode>)

