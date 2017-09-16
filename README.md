
<p align="center">
  <img src="https://github.com/adrigardi90/AngularSEO_friendly/blob/master/src/assets/A_U.png" alt="universal" width="290" height="290"/>
</p>

# AngularSEO_friendly
> Angular 4 application SEO (Search Engine Optimization) friendly with [Preboot.js](https://github.com/angular/preboot) &amp; [Angular Universal](https://github.com/angular/universal).

## Introduction
Search engine optimization (SEO) is the practice of increasing the quantity and the quality of traffic to your website through organic search engine results. The majority of web traffic is driven by the major commercial search engines, [Google](https://www.google.com), [Bing](https://www.bing.com) and [Yahoo!](https://es.yahoo.com). Although social media and other types of traffic can generate visits to your website, Search Engines are the primary method of navigation of the most Internet users whether the site provides content, information, services, etc.

Search engines are unique in that they provide targeted traffic (people looking for what you offer). So the site needs to be ready for offer the content and all the meta-information needed. In that way, the SEO robots could find the site first, and later they could add the content of it to their databases.

## SEO in Angular
Angular Universal with the help of [Express](http://expressjs.com/es/) let us to obtain the pre-render version of all the pages of our application. So now, the application has two main modules: one for the browser (like a normal SPA) and one for the server.

<p align="center">
  <img src="https://github.com/adrigardi90/AngularSEO_friendly/blob/master/src/assets/server-side-scheme.png" alt="universal" width="290" height="290"/>
  <img src="https://github.com/adrigardi90/AngularSEO_friendly/blob/master/src/assets/server-side-scheme2.png" alt="universal" width="290" height="290"/>
</p>

In that case, in the begining we obtain the pre-render version of the page, so we can see all the page and its content directly. But at the same time, the 'SPA version' is compiling and rendering, so at the end, we just have our SPA loaded with SEO friendly behavior.

However, imagine that our SPA needs 6 seconds to be compiled and rendered in the browser. The user can see the pre-render version, so he can interact with the page. What happen in that case? After that 6 seconds, when the SPA is just loaded, any interaction or event is cleared, because the 'real' SPA application just started and it does not have any 'information' yet. To resolve that, we use the library Preboot.js, that allow the server side view vesion to record the events from the user, and give them to the SPA when it has been compiled and rendered.

<p align="center">
  <img src="https://github.com/adrigardi90/AngularSEO_friendly/blob/master/src/assets/preboot.png" alt="universal" width="290" height="290"/>
</p>

## Quick start

```bash
# Clone the repo
https://github.com/adrigardi90/AngularSEO_friendly.git

# Change into the repo directory
cd AngularSEO_friendly

# install
npm install

```

## SPA Mode
The main problem of Single Page Applications (SPA) is that are not SEO friendly. At firs time, SPA can not provide the whole content of one its pages, because they first need to be loaded and rendered in the browser. If we server the App as a SPA:

```bash
# build SPA mode
npm run start
```

Visiting [http://localhost:8080](http://localhost:8080) in the browser:

<p align="center">
  <img src="https://github.com/adrigardi90/AngularSEO_friendly/blob/master/src/assets/SPA_load.png" alt="universal" width="833" height="499"/>
</p>

We can see that the fist file provided does not have the content of the Login Page. We only can see the message 'Loading...' inside of the 'app-root' tag that is the entry point of the application. In that case the page has not been rendered and interpreted yet by the browser, so it can not offer the valuable content and the meta-information that SEO needs. Furthermore, if we reload the page, we can see the 'Loading...' message in the browser that shows the browser is compaling and rendering the application.

<p align="center">
  <img src="https://github.com/adrigardi90/AngularSEO_friendly/blob/master/src/assets/SPA_reload.png" alt="universal" width="833" height="499"/>
</p>


## Server Side Render Mode
If we use Angular Universal to provide a server side render version of all the pages, we are able to provide all the content and the meta-information.

```bash
# build Server Side Mode
npm run start-seo
```

Visiting [http://localhost:4000](http://localhost:4000) in the browser:

<p align="center">
  <img src="https://github.com/adrigardi90/AngularSEO_friendly/blob/master/src/assets/SEO_load.png" alt="universal" width="833" height="499"/>
</p>

We can see that the first file loaded contains the whole information and meta-information of our Login Page. That means that SEO robots can find the information and index it to their databases. And if we try to reload the page, we could not see any 'Loading...' message in the browser, because the server side rendering provide us a pre-compiled version of Login Page.


