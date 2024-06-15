import{_ as t,c as a,o as d,e}from"./index-DzwqoDST.js";const n={data(){return{}},methods:{}},c=e(`<div class="main-alert" data-v-0d7680c4><div class="ad" data-v-0d7680c4><div class="d-flex justify-content-center align-items-center st-img" data-v-0d7680c4><div data-v-0d7680c4><h1 class="TXT" data-v-0d7680c4>Lern Workonreader </h1><div class="justify-content-center" data-v-0d7680c4><i class="TXT" data-v-0d7680c4> Get started</i></div></div></div><div data-v-0d7680c4><div data-v-0d7680c4><div data-v-0d7680c4><ul class="alert what d-flex align-items-center justify-content-center" data-v-0d7680c4><div data-v-0d7680c4><div class="d-flex justify-content-center" data-v-0d7680c4><h2 data-v-0d7680c4>Get started</h2></div><hr data-v-0d7680c4><div class="d-flex justify-content-center" data-v-0d7680c4><div style="font-size:17px;" data-v-0d7680c4><strong data-v-0d7680c4>Installing </strong><p data-v-0d7680c4>To get started, let&#39;s download <a href="https://nodejs.org/en" data-v-0d7680c4>Node js</a> (if you don&#39;t have it)</p><p data-v-0d7680c4>Next, install the workonreader library itself with the following command: <a href="https://www.npmjs.com/package/workonreader" data-v-0d7680c4>npm i workonreader</a></p><strong data-v-0d7680c4>Creating files</strong><p data-v-0d7680c4>First file, it is a index.js with this code: <pre data-v-0d7680c4>                                <code class="javascript" data-v-0d7680c4>
                                    const wr = require(&#39;workonreader&#39;)

                                    const filePath = &#39;data.workon&#39;;
                                    const Promise = wr.workonRead(filePath); 

                                    Promise
                                        .then(result =&gt; {
                                            console.log(result); 
                                        })
                                        .catch(error =&gt; {
                                            console.error(error.message); 
                                        });
                                </code>
                            </pre> And data.workon with this: <pre data-v-0d7680c4>                                <code class="javascript" data-v-0d7680c4>
                                    [-start-

                                    {mynum: int64} -&gt; 789 ;

                                    -end-]
                                </code>
                            </pre></p></div></div></div></ul></div></div></div><div data-v-0d7680c4><div data-v-0d7680c4><div class="d-flex justify-content-center" data-v-0d7680c4><ul class="alert what2 d-flex align-items-center justify-content-center" data-v-0d7680c4><div data-v-0d7680c4><div class="d-flex justify-content-center" data-v-0d7680c4><a href="/root/modules/2024max/js/workonreader/1.2.0/offline/cffw" class="btn btn-success" data-v-0d7680c4>Next lesson</a></div></div></ul></div></div></div></div></div>`,1),s=[c];function r(i,o,v,l,f,h){return d(),a("main",null,s)}const u=t(n,[["render",r],["__scopeId","data-v-0d7680c4"]]);export{u as default};
