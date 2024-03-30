This is a [Plasmo extension](https://docs.plasmo.com/) project bootstrapped with [`plasmo init`](https://www.npmjs.com/package/plasmo).

## Getting Started

Firstly, go to [Microsoft Clarity](https://clarity.microsoft.com/) and create a project.

Then get your tracking code that looks like this:
```
<script type="text/javascript">
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "**The ID that you need to copy**");
</script>
```

After you have your project ID as shown above, go to `https://www.clarity.ms/tag/**The ID that you need to copy**` and copy the "config" object at the end of the script there, it should look something like this:
```
!function(c,l,a,r,i,t,y){function sync(){(new Image).src="https://c.clarity.ms/c.gif"}"complete"==document.readyState?sync():window.addEventListener("load",sync);if(a[c].v||a[c].t)return a[c]("event",c,"dup."+i.projectId);a[c].t=!0,(t=l.createElement(r)).async=!0,t.src="https://www.clarity.ms/s/0.7.20/clarity.js",(y=l.getElementsByTagName(r)[0]).parentNode.insertBefore(t,y),a[c]("start",i),a[c].q.unshift(a[c].q.pop()),a[c]("set","C_IS","0")}("clarity",document,window,"script",{"projectId":"***Project ID***","upload":"https://t.clarity.ms/collect","expire":365,"cookies":["_uetmsclkid","_uetvid"],"track":true,"lean":false,"content":false,"dob":1442});
```

After you have gone to that page, copy the object at the end that looks like 
```
{"projectId":"***Project ID***","upload":"https://t.clarity.ms/collect","expire":365,"cookies":["_uetmsclkid","_uetvid"],"track":true,"lean":false,"content":false,"dob":1442}
```

Then replace `config` in `background.ts` with that object.

And finally, run the development server:

```bash
pnpm dev
# or
npm run dev
```

Note: Adblockers like Ublock Origin and others block Microsoft Clarity. To confirm you've set everything up properly, follow this guide [here](https://learn.microsoft.com/en-us/clarity/setup-and-installation/clarity-setup#verify-your-installation) and look out for POST requests to `https://www.clarity.ms/collect`.

Open your browser and load the appropriate development build. For example, if you are developing for the chrome browser, using manifest v3, use: `build/chrome-mv3-dev`.

You can start editing the popup by modifying `popup.tsx`. It should auto-update as you make changes. To add an options page, simply add a `options.tsx` file to the root of the project, with a react component default exported. Likewise to add a content page, add a `content.ts` file to the root of the project, importing some module and do some logic, then reload the extension on your browser.

For further guidance, [visit our Documentation](https://docs.plasmo.com/)

## Making production build

Run the following:

```bash
pnpm build
# or
npm run build
```

This should create a production bundle for your extension, ready to be zipped and published to the stores.

## Submit to the webstores

The easiest way to deploy your Plasmo extension is to use the built-in [bpp](https://bpp.browser.market) GitHub action. Prior to using this action however, make sure to build your extension and upload the first version to the store to establish the basic credentials. Then, simply follow [this setup instruction](https://docs.plasmo.com/framework/workflows/submit) and you should be on your way for automated submission!
