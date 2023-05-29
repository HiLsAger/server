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
                    <a href="index.html" data-type="index-link">server documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
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
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-7346f236f8c5ff0ae1d4c08a993a487ba50861d4d8d23a5bd514a25ed7ace95edab4cbcc59e446aba0b27c28cafc67475c2a944bfae90ed7e5f9f44574f53183"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-7346f236f8c5ff0ae1d4c08a993a487ba50861d4d8d23a5bd514a25ed7ace95edab4cbcc59e446aba0b27c28cafc67475c2a944bfae90ed7e5f9f44574f53183"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-7346f236f8c5ff0ae1d4c08a993a487ba50861d4d8d23a5bd514a25ed7ace95edab4cbcc59e446aba0b27c28cafc67475c2a944bfae90ed7e5f9f44574f53183"' :
                                        'id="xs-injectables-links-module-AuthModule-7346f236f8c5ff0ae1d4c08a993a487ba50861d4d8d23a5bd514a25ed7ace95edab4cbcc59e446aba0b27c28cafc67475c2a944bfae90ed7e5f9f44574f53183"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-b3ab7150d363bc58d9d367ae61b25302d7c04712fc4672708903e85f8e803c4e38eff76526831251ac2cb8e17ad1474c4823a0ee19bbb90d0640e2487e5b2d05-1"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-b3ab7150d363bc58d9d367ae61b25302d7c04712fc4672708903e85f8e803c4e38eff76526831251ac2cb8e17ad1474c4823a0ee19bbb90d0640e2487e5b2d05-1"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-b3ab7150d363bc58d9d367ae61b25302d7c04712fc4672708903e85f8e803c4e38eff76526831251ac2cb8e17ad1474c4823a0ee19bbb90d0640e2487e5b2d05-1"' :
                                            'id="xs-controllers-links-module-AuthModule-b3ab7150d363bc58d9d367ae61b25302d7c04712fc4672708903e85f8e803c4e38eff76526831251ac2cb8e17ad1474c4823a0ee19bbb90d0640e2487e5b2d05-1"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-b3ab7150d363bc58d9d367ae61b25302d7c04712fc4672708903e85f8e803c4e38eff76526831251ac2cb8e17ad1474c4823a0ee19bbb90d0640e2487e5b2d05-1"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-b3ab7150d363bc58d9d367ae61b25302d7c04712fc4672708903e85f8e803c4e38eff76526831251ac2cb8e17ad1474c4823a0ee19bbb90d0640e2487e5b2d05-1"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-b3ab7150d363bc58d9d367ae61b25302d7c04712fc4672708903e85f8e803c4e38eff76526831251ac2cb8e17ad1474c4823a0ee19bbb90d0640e2487e5b2d05-1"' :
                                        'id="xs-injectables-links-module-AuthModule-b3ab7150d363bc58d9d367ae61b25302d7c04712fc4672708903e85f8e803c4e38eff76526831251ac2cb8e17ad1474c4823a0ee19bbb90d0640e2487e5b2d05-1"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DatabaseModule.html" data-type="entity-link" >DatabaseModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ModulesModule.html" data-type="entity-link" >ModulesModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PagesModule.html" data-type="entity-link" >PagesModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/VideosModule.html" data-type="entity-link" >VideosModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-VideosModule-6fea9f60fea6829fa46f5357682aed3d0265ef531259dfdf144caca28e976b0f16cf2961352ff09d9d8d0ab5fae6ba437785196d879c2bddb926f93cc51809d4"' : 'data-bs-target="#xs-controllers-links-module-VideosModule-6fea9f60fea6829fa46f5357682aed3d0265ef531259dfdf144caca28e976b0f16cf2961352ff09d9d8d0ab5fae6ba437785196d879c2bddb926f93cc51809d4"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-VideosModule-6fea9f60fea6829fa46f5357682aed3d0265ef531259dfdf144caca28e976b0f16cf2961352ff09d9d8d0ab5fae6ba437785196d879c2bddb926f93cc51809d4"' :
                                            'id="xs-controllers-links-module-VideosModule-6fea9f60fea6829fa46f5357682aed3d0265ef531259dfdf144caca28e976b0f16cf2961352ff09d9d8d0ab5fae6ba437785196d879c2bddb926f93cc51809d4"' }>
                                            <li class="link">
                                                <a href="controllers/VideosController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VideosController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-VideosModule-6fea9f60fea6829fa46f5357682aed3d0265ef531259dfdf144caca28e976b0f16cf2961352ff09d9d8d0ab5fae6ba437785196d879c2bddb926f93cc51809d4"' : 'data-bs-target="#xs-injectables-links-module-VideosModule-6fea9f60fea6829fa46f5357682aed3d0265ef531259dfdf144caca28e976b0f16cf2961352ff09d9d8d0ab5fae6ba437785196d879c2bddb926f93cc51809d4"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-VideosModule-6fea9f60fea6829fa46f5357682aed3d0265ef531259dfdf144caca28e976b0f16cf2961352ff09d9d8d0ab5fae6ba437785196d879c2bddb926f93cc51809d4"' :
                                        'id="xs-injectables-links-module-VideosModule-6fea9f60fea6829fa46f5357682aed3d0265ef531259dfdf144caca28e976b0f16cf2961352ff09d9d8d0ab5fae6ba437785196d879c2bddb926f93cc51809d4"' }>
                                        <li class="link">
                                            <a href="injectables/VideosService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VideosService</a>
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
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/VideosController.html" data-type="entity-link" >VideosController</a>
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
                                <a href="classes/Comment.html" data-type="entity-link" >Comment</a>
                            </li>
                            <li class="link">
                                <a href="classes/CommentInput.html" data-type="entity-link" >CommentInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginInput.html" data-type="entity-link" >LoginInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/RegisterInput.html" data-type="entity-link" >RegisterInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/Status.html" data-type="entity-link" >Status</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                            <li class="link">
                                <a href="classes/Video.html" data-type="entity-link" >Video</a>
                            </li>
                            <li class="link">
                                <a href="classes/VideoInput.html" data-type="entity-link" >VideoInput</a>
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
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService-1.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/VideosService.html" data-type="entity-link" >VideosService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#guards-links"' :
                            'data-bs-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
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