'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">project-restaurant-orders documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-5ec0f281824569bd7d0d5dc635cf0503cc0b33a75c30bdfbf136ce82f1e89b660770353522a267ad8034f35304dfcae3f592ea6f32698ee2e0bc442c0727631a"' : 'data-bs-target="#xs-controllers-links-module-AppModule-5ec0f281824569bd7d0d5dc635cf0503cc0b33a75c30bdfbf136ce82f1e89b660770353522a267ad8034f35304dfcae3f592ea6f32698ee2e0bc442c0727631a"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-5ec0f281824569bd7d0d5dc635cf0503cc0b33a75c30bdfbf136ce82f1e89b660770353522a267ad8034f35304dfcae3f592ea6f32698ee2e0bc442c0727631a"' :
                                            'id="xs-controllers-links-module-AppModule-5ec0f281824569bd7d0d5dc635cf0503cc0b33a75c30bdfbf136ce82f1e89b660770353522a267ad8034f35304dfcae3f592ea6f32698ee2e0bc442c0727631a"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-5ec0f281824569bd7d0d5dc635cf0503cc0b33a75c30bdfbf136ce82f1e89b660770353522a267ad8034f35304dfcae3f592ea6f32698ee2e0bc442c0727631a"' : 'data-bs-target="#xs-injectables-links-module-AppModule-5ec0f281824569bd7d0d5dc635cf0503cc0b33a75c30bdfbf136ce82f1e89b660770353522a267ad8034f35304dfcae3f592ea6f32698ee2e0bc442c0727631a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-5ec0f281824569bd7d0d5dc635cf0503cc0b33a75c30bdfbf136ce82f1e89b660770353522a267ad8034f35304dfcae3f592ea6f32698ee2e0bc442c0727631a"' :
                                        'id="xs-injectables-links-module-AppModule-5ec0f281824569bd7d0d5dc635cf0503cc0b33a75c30bdfbf136ce82f1e89b660770353522a267ad8034f35304dfcae3f592ea6f32698ee2e0bc442c0727631a"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-c43e37ee80798994604520f5c662edef4a135c8351dacd55ae04c9ec379b7db1169845dd9c6852da723726645baf22b7ddb5a05ed16925e8237ca2d5a968d17c"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-c43e37ee80798994604520f5c662edef4a135c8351dacd55ae04c9ec379b7db1169845dd9c6852da723726645baf22b7ddb5a05ed16925e8237ca2d5a968d17c"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-c43e37ee80798994604520f5c662edef4a135c8351dacd55ae04c9ec379b7db1169845dd9c6852da723726645baf22b7ddb5a05ed16925e8237ca2d5a968d17c"' :
                                            'id="xs-controllers-links-module-AuthModule-c43e37ee80798994604520f5c662edef4a135c8351dacd55ae04c9ec379b7db1169845dd9c6852da723726645baf22b7ddb5a05ed16925e8237ca2d5a968d17c"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-c43e37ee80798994604520f5c662edef4a135c8351dacd55ae04c9ec379b7db1169845dd9c6852da723726645baf22b7ddb5a05ed16925e8237ca2d5a968d17c"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-c43e37ee80798994604520f5c662edef4a135c8351dacd55ae04c9ec379b7db1169845dd9c6852da723726645baf22b7ddb5a05ed16925e8237ca2d5a968d17c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-c43e37ee80798994604520f5c662edef4a135c8351dacd55ae04c9ec379b7db1169845dd9c6852da723726645baf22b7ddb5a05ed16925e8237ca2d5a968d17c"' :
                                        'id="xs-injectables-links-module-AuthModule-c43e37ee80798994604520f5c662edef4a135c8351dacd55ae04c9ec379b7db1169845dd9c6852da723726645baf22b7ddb5a05ed16925e8237ca2d5a968d17c"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/OrderModule.html" data-type="entity-link" >OrderModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-OrderModule-2542f6f085605a9f5a5e18576e455a03d5e93da3ab2a5e1fd7a4909a4408ac6d815ae97eda4ba178ca6e5c03a0778a052a56b314f5ee3481895d12dcdfb98f80"' : 'data-bs-target="#xs-controllers-links-module-OrderModule-2542f6f085605a9f5a5e18576e455a03d5e93da3ab2a5e1fd7a4909a4408ac6d815ae97eda4ba178ca6e5c03a0778a052a56b314f5ee3481895d12dcdfb98f80"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-OrderModule-2542f6f085605a9f5a5e18576e455a03d5e93da3ab2a5e1fd7a4909a4408ac6d815ae97eda4ba178ca6e5c03a0778a052a56b314f5ee3481895d12dcdfb98f80"' :
                                            'id="xs-controllers-links-module-OrderModule-2542f6f085605a9f5a5e18576e455a03d5e93da3ab2a5e1fd7a4909a4408ac6d815ae97eda4ba178ca6e5c03a0778a052a56b314f5ee3481895d12dcdfb98f80"' }>
                                            <li class="link">
                                                <a href="controllers/OrderController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrderController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-OrderModule-2542f6f085605a9f5a5e18576e455a03d5e93da3ab2a5e1fd7a4909a4408ac6d815ae97eda4ba178ca6e5c03a0778a052a56b314f5ee3481895d12dcdfb98f80"' : 'data-bs-target="#xs-injectables-links-module-OrderModule-2542f6f085605a9f5a5e18576e455a03d5e93da3ab2a5e1fd7a4909a4408ac6d815ae97eda4ba178ca6e5c03a0778a052a56b314f5ee3481895d12dcdfb98f80"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-OrderModule-2542f6f085605a9f5a5e18576e455a03d5e93da3ab2a5e1fd7a4909a4408ac6d815ae97eda4ba178ca6e5c03a0778a052a56b314f5ee3481895d12dcdfb98f80"' :
                                        'id="xs-injectables-links-module-OrderModule-2542f6f085605a9f5a5e18576e455a03d5e93da3ab2a5e1fd7a4909a4408ac6d815ae97eda4ba178ca6e5c03a0778a052a56b314f5ee3481895d12dcdfb98f80"' }>
                                        <li class="link">
                                            <a href="injectables/OrderService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrderService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PrismaModule.html" data-type="entity-link" >PrismaModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PrismaModule-0a30996d1235bf2604a3c3e09c8f1199d43cb26cc3a3c409db2ea23ad71bf181806b1da96cfc90d204e717a917b83b7d35bd1c8bff82b9170de5064b4a322113"' : 'data-bs-target="#xs-injectables-links-module-PrismaModule-0a30996d1235bf2604a3c3e09c8f1199d43cb26cc3a3c409db2ea23ad71bf181806b1da96cfc90d204e717a917b83b7d35bd1c8bff82b9170de5064b4a322113"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PrismaModule-0a30996d1235bf2604a3c3e09c8f1199d43cb26cc3a3c409db2ea23ad71bf181806b1da96cfc90d204e717a917b83b7d35bd1c8bff82b9170de5064b4a322113"' :
                                        'id="xs-injectables-links-module-PrismaModule-0a30996d1235bf2604a3c3e09c8f1199d43cb26cc3a3c409db2ea23ad71bf181806b1da96cfc90d204e717a917b83b7d35bd1c8bff82b9170de5064b4a322113"' }>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProductModule.html" data-type="entity-link" >ProductModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-ProductModule-87efafb8fe8994b98b0d2b609c5734dad57eadff2b3e0d845c3ca778b79d9bc9768b3df12fb80301dccf8a7ec70dbb26c2a1a7921d9b1a13eb974794755c9f6e"' : 'data-bs-target="#xs-controllers-links-module-ProductModule-87efafb8fe8994b98b0d2b609c5734dad57eadff2b3e0d845c3ca778b79d9bc9768b3df12fb80301dccf8a7ec70dbb26c2a1a7921d9b1a13eb974794755c9f6e"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ProductModule-87efafb8fe8994b98b0d2b609c5734dad57eadff2b3e0d845c3ca778b79d9bc9768b3df12fb80301dccf8a7ec70dbb26c2a1a7921d9b1a13eb974794755c9f6e"' :
                                            'id="xs-controllers-links-module-ProductModule-87efafb8fe8994b98b0d2b609c5734dad57eadff2b3e0d845c3ca778b79d9bc9768b3df12fb80301dccf8a7ec70dbb26c2a1a7921d9b1a13eb974794755c9f6e"' }>
                                            <li class="link">
                                                <a href="controllers/ProductController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ProductModule-87efafb8fe8994b98b0d2b609c5734dad57eadff2b3e0d845c3ca778b79d9bc9768b3df12fb80301dccf8a7ec70dbb26c2a1a7921d9b1a13eb974794755c9f6e"' : 'data-bs-target="#xs-injectables-links-module-ProductModule-87efafb8fe8994b98b0d2b609c5734dad57eadff2b3e0d845c3ca778b79d9bc9768b3df12fb80301dccf8a7ec70dbb26c2a1a7921d9b1a13eb974794755c9f6e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ProductModule-87efafb8fe8994b98b0d2b609c5734dad57eadff2b3e0d845c3ca778b79d9bc9768b3df12fb80301dccf8a7ec70dbb26c2a1a7921d9b1a13eb974794755c9f6e"' :
                                        'id="xs-injectables-links-module-ProductModule-87efafb8fe8994b98b0d2b609c5734dad57eadff2b3e0d845c3ca778b79d9bc9768b3df12fb80301dccf8a7ec70dbb26c2a1a7921d9b1a13eb974794755c9f6e"' }>
                                        <li class="link">
                                            <a href="injectables/ProductService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TableModule.html" data-type="entity-link" >TableModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-TableModule-3de8e98e2a4a7985f2e161f80404b38b3f554d1e00722efd0c9d015d44bd2e9d185cf05c8f296268dfe6f208bd495be5686c58d148bbf4874bb66820f665ff9d"' : 'data-bs-target="#xs-controllers-links-module-TableModule-3de8e98e2a4a7985f2e161f80404b38b3f554d1e00722efd0c9d015d44bd2e9d185cf05c8f296268dfe6f208bd495be5686c58d148bbf4874bb66820f665ff9d"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TableModule-3de8e98e2a4a7985f2e161f80404b38b3f554d1e00722efd0c9d015d44bd2e9d185cf05c8f296268dfe6f208bd495be5686c58d148bbf4874bb66820f665ff9d"' :
                                            'id="xs-controllers-links-module-TableModule-3de8e98e2a4a7985f2e161f80404b38b3f554d1e00722efd0c9d015d44bd2e9d185cf05c8f296268dfe6f208bd495be5686c58d148bbf4874bb66820f665ff9d"' }>
                                            <li class="link">
                                                <a href="controllers/TableController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TableController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-TableModule-3de8e98e2a4a7985f2e161f80404b38b3f554d1e00722efd0c9d015d44bd2e9d185cf05c8f296268dfe6f208bd495be5686c58d148bbf4874bb66820f665ff9d"' : 'data-bs-target="#xs-injectables-links-module-TableModule-3de8e98e2a4a7985f2e161f80404b38b3f554d1e00722efd0c9d015d44bd2e9d185cf05c8f296268dfe6f208bd495be5686c58d148bbf4874bb66820f665ff9d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TableModule-3de8e98e2a4a7985f2e161f80404b38b3f554d1e00722efd0c9d015d44bd2e9d185cf05c8f296268dfe6f208bd495be5686c58d148bbf4874bb66820f665ff9d"' :
                                        'id="xs-injectables-links-module-TableModule-3de8e98e2a4a7985f2e161f80404b38b3f554d1e00722efd0c9d015d44bd2e9d185cf05c8f296268dfe6f208bd495be5686c58d148bbf4874bb66820f665ff9d"' }>
                                        <li class="link">
                                            <a href="injectables/TableService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TableService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UserModule-6b8769623c01b6a0db0677828e5011d3650b66576964787cbe94ec5edb358bb17d2cc742bbd65e8c03537e55c70a96602f26c43cc519237cf9d2f821e5165b4e"' : 'data-bs-target="#xs-controllers-links-module-UserModule-6b8769623c01b6a0db0677828e5011d3650b66576964787cbe94ec5edb358bb17d2cc742bbd65e8c03537e55c70a96602f26c43cc519237cf9d2f821e5165b4e"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserModule-6b8769623c01b6a0db0677828e5011d3650b66576964787cbe94ec5edb358bb17d2cc742bbd65e8c03537e55c70a96602f26c43cc519237cf9d2f821e5165b4e"' :
                                            'id="xs-controllers-links-module-UserModule-6b8769623c01b6a0db0677828e5011d3650b66576964787cbe94ec5edb358bb17d2cc742bbd65e8c03537e55c70a96602f26c43cc519237cf9d2f821e5165b4e"' }>
                                            <li class="link">
                                                <a href="controllers/UserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UserModule-6b8769623c01b6a0db0677828e5011d3650b66576964787cbe94ec5edb358bb17d2cc742bbd65e8c03537e55c70a96602f26c43cc519237cf9d2f821e5165b4e"' : 'data-bs-target="#xs-injectables-links-module-UserModule-6b8769623c01b6a0db0677828e5011d3650b66576964787cbe94ec5edb358bb17d2cc742bbd65e8c03537e55c70a96602f26c43cc519237cf9d2f821e5165b4e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-6b8769623c01b6a0db0677828e5011d3650b66576964787cbe94ec5edb358bb17d2cc742bbd65e8c03537e55c70a96602f26c43cc519237cf9d2f821e5165b4e"' :
                                        'id="xs-injectables-links-module-UserModule-6b8769623c01b6a0db0677828e5011d3650b66576964787cbe94ec5edb358bb17d2cc742bbd65e8c03537e55c70a96602f26c43cc519237cf9d2f821e5165b4e"' }>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/OrderController.html" data-type="entity-link" >OrderController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ProductController.html" data-type="entity-link" >ProductController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/TableController.html" data-type="entity-link" >TableController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UserController.html" data-type="entity-link" >UserController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreateOrderDto.html" data-type="entity-link" >CreateOrderDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateOrderProductDto.html" data-type="entity-link" >CreateOrderProductDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateProductDto.html" data-type="entity-link" >CreateProductDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateTableDto.html" data-type="entity-link" >CreateTableDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ErrorMiddleware.html" data-type="entity-link" >ErrorMiddleware</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginDto.html" data-type="entity-link" >LoginDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginResponseDto.html" data-type="entity-link" >LoginResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Order.html" data-type="entity-link" >Order</a>
                            </li>
                            <li class="link">
                                <a href="classes/Product.html" data-type="entity-link" >Product</a>
                            </li>
                            <li class="link">
                                <a href="classes/Table.html" data-type="entity-link" >Table</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateOrderDto.html" data-type="entity-link" >UpdateOrderDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateProductDto.html" data-type="entity-link" >UpdateProductDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateTableDto.html" data-type="entity-link" >UpdateTableDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtStrategy.html" data-type="entity-link" >JwtStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OrderService.html" data-type="entity-link" >OrderService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PrismaService.html" data-type="entity-link" >PrismaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductService.html" data-type="entity-link" >ProductService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TableService.html" data-type="entity-link" >TableService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});