<template>
    <div id="root">
        <div v-loading="loading"  element-loading-custom-class="loading_color" element-loading-spinner="el-icon-loading">
            <div class="ThemedWrapper-jd76ve-0 iIQNKn">
                <div class="am-modal-mask " style="display:none" id="weixinbox">
                    <div class="am-modal-wrap " role="dialog" aria-labelledby="[object Object]">
                        <div role="document" class="am-modal am-modal-transparent">
                            <div class="am-modal-content">
                                <button aria-label="Close" class="am-modal-close">
                                    <span class="am-modal-close-x"></span>
                                </button>
                                <div class="am-modal-header">
                                    <div class="am-modal-title">
                                        <div>{{htStores.StoresName}}</div>
                                        <div class="ShopWechatQrCode__SubTitle-qb44ad-0 gvILiq">微信扫一扫</div>
                                    </div>
                                </div>
                                <div class="am-modal-body">
                                    <img :src="htStores.KFQrCode" style="visibility: visible;"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="am-modal-mask " id="telbox" style="display:none"><div class="am-modal-wrap " role="dialog"><div role="document" class="am-modal am-modal-transparent"><div class="am-modal-content"><div class="am-modal-body"><div><p>即将拨打:</p><br><h3>{{htStores.StoresPhone}}</h3></div></div><div class="am-modal-footer"><div class="am-modal-button-group-h am-modal-button-group-normal" role="group"><a class="am-modal-button" role="button">取消</a><a class="am-modal-button" role="button" :href="phone">确认</a></div></div></div></div></div>
                </div>
                <div class="navbarWrapper">
                    <div class="">
                        <div class="ShopShow__Wrapper-d1pdiz-1 eIMBnh">
                            <div class="DisplayCard-bf03i4-0 hFQfnW">
                                <div class="ShopIntroduceCard__Card-k5pdv1-0 jVWYJB" style="padding-bottom: 10px">

                                    <div class="slider am-carousel ShopIntroduceCard__MyCarousel-k5pdv1-1 hQEcB">
                                        <div class="slider-frame">
                                            <ul class="slider-list">
                                                <div class="swiper-container banner11">
                                                    <div class="swiper-wrapper">
                                                        <div class="swiper-slide" v-for="(item,index) in listStoresImg">
                                                            <li class="slider-slide">
                                                                <div class="CdnImage__ImageWithBackground-sc-1pzwnhb-0 "
                                                                     :style="{backgroundImage:'url(' + item.ImgUrl + ')'}">

                                                                </div>
                                                            </li>

                                                        </div>

<!--                                                        <div class="swiper-slide">-->
<!--                                                            <li class="slider-slide">-->
<!--                                                                <div class="CdnImage__ImageWithBackground-sc-1pzwnhb-0"-->
<!--                                                                     style=" background-image: url(../../static/images/redstyle/2020-6-12-22-4-20.png), linear-gradient(white, white);">-->
<!--                                                                </div>-->
<!--                                                            </li>-->

<!--                                                        </div>-->

<!--                                                        <div class="swiper-slide">-->
<!--                                                            <li class="slider-slide">-->
<!--                                                                <div class="CdnImage__ImageWithBackground-sc-1pzwnhb-0"-->
<!--                                                                     style=" background-image: url(../../static/images/redstyle/2020-6-12-22-0-23.jpg), linear-gradient(white, white);">-->
<!--                                                                </div>-->
<!--                                                            </li>-->

<!--                                                        </div>-->
                                                    </div>
                                                    <div class="swiper-pagination"></div>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div class="DisplayCard-bf03i4-0 hFQfnW">
                                <div class="ShopIntroduceCard__Card-k5pdv1-0 jVWYJB" style="padding: 12px 0 0">

                                    <div class="fourBox">
                                        <div class="fourBoxItem" @click="tocalendar">
                                            <i class="iconfont icon-Fyuke"></i>
                                            <div class="fourBoxText">约课</div>
                                        </div>
                                        <div  class="fourBoxItem" @click="toyuyue">
                                            <i class="iconfont icon-Fyuyue"></i>
                                            <div class="fourBoxText">我的预约</div>
                                        </div>
                                        <div  class="fourBoxItem" @click="tocard">
                                            <i class="iconfont icon-Fhuiyuanka"></i>
                                            <div class="fourBoxText">我的会员卡</div>
                                        </div>
                                        <div  class="fourBoxItem" @click="tonotice">
                                            <i class="iconfont icon-Fxiaoxi"></i>
                                            <div class="fourBoxText">消息中心</div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div class="DisplayCard-bf03i4-0 hFQfnW">
                                <div class="overflowHidden">
                                    <div class="ShopAnnouncementsCarousel__Divider-sc-1gfm71p-0 iObjjm"></div>
                                    <div class="slider am-carousel am-carousel-vertical">
                                        <div class="slider-frame">
                                            <ul class="slider-list">
                                                <a @click="toannouncements">
                                                    <div class="DisplayCard__DisplayCardHeader-bf03i4-1 gAtRbL">
                                                        <div
                                                            class="ShopAnnouncementsCarousel__ContentWrapper-sc-1gfm71p-1 ipBvce sub">
                                                            <i class="icon am-icon am-icon-notification-icon"></i>
                                                            <span>{{htAnnouncement.aTitle}}</span>
                                                        </div>
                                                        <div class="extra">
                                                            <span>
                                                                <span>{{htAnnouncement.addTime}}</span>
                                                            </span>
                                                            <i class="icon am-icon am-icon-arrow-right"></i>

                                                        </div>
                                                    </div>
                                                </a>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
<!--                            <div class="DisplayCard-bf03i4-0 hFQfnW">-->
<!--                                <div class="DisplayCard__DisplayCardHeader-bf03i4-1 gAtRbL">-->
<!--                                    <div class="main">约课</div>-->
<!--                                    <a @click="tocalendar">-->
<!--                                        <div class="extra"><span>课程日历</span><i-->
<!--                                            class="icon am-icon am-icon-arrow-right"></i></div>-->
<!--                                    </a>-->
<!--                                </div>-->
<!--                                <div class="LessonsTimeTable__TimeTableTabsWrapper-w7ckkm-1 kjkYtB">-->
<!--                                    <div class="am-tabs am-tabs-horizontal am-tabs-top">-->
<!--                                        <div class="sliderList">-->
<!--                                            <div class="am-tabs-tab-bar-wrap">-->
<!--                                                <div class="am-tabs-default-bar am-tabs-default-bar-animated am-tabs-default-bar-top"-->
<!--                                                >-->
<!--                                                    <div class="am-tabs-default-bar-content">-->
<!--                                                        <div class="am-tabs-default-bar-tab" v-for="(item,index) in dateList" @click="getListRowClassTwo(item.sendDate,index)" :class="activeIndex == index?'am-tabs-default-bar-tab-active' : ''">-->
<!--                                                            <div class="LessonsTimeTable__TimeTitleWrapper-w7ckkm-0 esLnww">-->
<!--                                                                <span v-if="index == 0">今天</span>-->
<!--                                                                <span v-else>{{item.week}}</span>-->
<!--                                                                <span>{{item.listDate}}</span><i></i>-->
<!--                                                            </div>-->
<!--                                                        </div>-->
<!--                                                    </div>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                        <div class="am-tabs-content-wrap am-tabs-content-wrap-animated">-->
<!--                                            <div class="am-tabs-pane-wrap am-tabs-pane-wrap-active">-->
<!--                                                <div id="tabs-container" class="swiper-container">-->
<!--                                                    <div class="swiper-wrapper">-->
<!--                                                        <div class="swiper-slide">-->
<!--                                                            <div class="list">-->

<!--                                                            <div @click="tolesson(item.ID,item.PreAboutID,item.ID)" v-for="(item,index) in RowClassTwo">-->
<!--                                                                <div-->
<!--                                                                    class="NewLessonItem__Wrapper-sc-1f60nxc-0 dddPAx new-lesson-item">-->
<!--                                                                    <div>-->
<!--                                                                        <div-->
<!--                                                                            class="NewLessonItem__MainContent-sc-1f60nxc-1 hzSaX">-->
<!--                                                                            <div-->
<!--                                                                                class="NewLessonItem__ImageWrapper-sc-1f60nxc-2 iFQmQO">-->
<!--                                                                                <div class="CdnImage__ImageWithBackground-sc-1pzwnhb-0 image"-->
<!--                                                                                     :style="{backgroundImage: 'url(' + item.CourseHeadUrl + ')'}">-->
<!--                                                                                </div><span-->
<!--                                                                                class="NewLessonItem__StatusBadgeWrapper-sc-1f60nxc-4 bcgiLI">-->
<!--                                                                                <span v-if="item.showstate == '1'">不可约</span>-->
<!--                                                                                <span v-if="item.showstate == '0'">可预约</span>-->
<!--                                                                            </span>-->
<!--                                                                            </div>-->
<!--                                                                            <div class="text"><span-->
<!--                                                                                class="lesson-title multiLine line-2 fontBold"><span-->
<!--                                                                                class="CustomBadge__CustomBadgeWrapper-akgvp1-0 lcSuB">-->
<!--                                                                                <span v-if="item.RowClassType == '0'">班课</span>-->
<!--                                                                                <span v-if="item.RowClassType == '1'">私教</span>-->
<!--                                                                            </span>{{item.CourseName}}</span>-->
<!--                                                                                <div-->
<!--                                                                                    class="NewLessonItem__CardLastRow-sc-1f60nxc-3 AcxWG">-->
<!--                                                                                    <div class="lesson-information">-->
<!--                                                                                        <div class="lesson-time">-->
<!--                                                                                            <span><span>{{item.startTime}}</span></span>-->
<!--                                                                                        </div>-->
<!--                                                                                        <div class="lesson-price" ><span-->
<!--                                                                                            class="color-font period-count">{{item.ConsumptionOfClass}}课时</span><span-->
<!--                                                                                            class="color-font price" v-if="item.preAboutType == '3' || item.preAboutType == '1'">￥{{item.singlePrice}}</span>-->
<!--                                                                                        </div>-->
<!--                                                                                        <div class="teacher"><span>{{item.Name}}</span>-->
<!--                                                                                        </div>-->
<!--                                                                                    </div>-->
<!--                                                                                    <span class="NewLessonItem__StatusBadgeWrapper-sc-1f60nxc-4 bcgiLI right-side" v-if="item.showstate == 1">已结束</span>-->
<!--                                                                                    <a role="button" v-if="item.showstate == 0"-->
<!--                                                                                       class="am-button CustomButton__InnerButton-sc-1u03hwt-1 dhkNjs themed mini appointment-status-button am-button-small"-->
<!--                                                                                       aria-disabled="false"><span-->
<!--                                                                                        class="inner">预约</span></a>-->
<!--                                                                                </div>-->
<!--                                                                            </div>-->
<!--                                                                        </div>-->
<!--                                                                    </div>-->
<!--                                                                </div>-->
<!--                                                            </div>-->

<!--                                                        </div>-->
<!--                                                        </div>-->

<!--                                                    </div>-->
<!--                                                </div>-->










<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                            </div>-->
                            <div class="DisplayCard-bf03i4-0 hFQfnW">
                                <div class="DisplayCard__DisplayCardHeader-bf03i4-1 gAtRbL">
                                    <div class="main">精品团课</div><a class="extra" @click="tocourses"><span>查看全部</span><svg
                                    class="icon am-icon am-icon-arrow-right" fill="currentColor">
                                    <use xlink:href="#arrow-right"></use>
                                </svg></a>
                                </div>
                                <div>
                                    <div class="sliderList">
                                        <div class="ShopCourse__CourseWrapper-sc-1fokges-0 eQuHvg"
                                             @click="tocourses_detail(item.ID)"
                                               v-for="(item,index) in listCourse">
                                            <div class="CdnImage__ImageWithBackground-sc-1pzwnhb-0 image"
                                                 :style="{backgroundImage:'url(' + item.HeadUrl + ')'}">
                                            </div>
                                            <div class="text">
                                                <div class="name multiLine line-2">{{item.CourseName}}</div>
                                            </div>
                                        </div>



<!--                                        <div class="ShopCourse__CourseWrapper-sc-1fokges-0 eQuHvg"-->
<!--                                             onclick="javascript:window.location.href='courses_detail.html'">-->
<!--                                            <div class="CdnImage__ImageWithBackground-sc-1pzwnhb-0 dMIOVt image"-->
<!--                                                 style="background-image:url(../../static/images/redstyle/2020-5-11-13-42-4.jpg)"></div>-->
<!--                                            <div class="text">-->
<!--                                                <div class="name multiLine line-2">产后私教提升课</div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                        <div class="ShopCourse__CourseWrapper-sc-1fokges-0 eQuHvg"-->
<!--                                             onclick="javascript:window.location.href='courses_detail.html'">-->
<!--                                            <div class="CdnImage__ImageWithBackground-sc-1pzwnhb-0 clHSUq image"-->
<!--                                                 style="background-image:url(../../static/images/redstyle/2020-5-11-13-42-4.jpg)"></div>-->
<!--                                            <div class="text">-->
<!--                                                <div class="name multiLine line-2">理疗瑜伽课</div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                        <div class="ShopCourse__CourseWrapper-sc-1fokges-0 eQuHvg"-->
<!--                                             onclick="javascript:window.location.href='courses_detail.html'">-->
<!--                                            <div class="CdnImage__ImageWithBackground-sc-1pzwnhb-0 jJXbcP image"-->
<!--                                                 style="background-image:url(../../static/images/redstyle/2020-5-11-13-42-4.jpg)"></div>-->
<!--                                            <div class="text">-->
<!--                                                <div class="name multiLine line-2">零基础瑜伽周末班</div>-->
<!--                                            </div>-->
<!--                                        </div>-->
                                    </div>
                                </div>
                            </div>
                            <div class="DisplayCard-bf03i4-0 hFQfnW"  v-if="listCrad != undefined  && listCrad.length >0">
                                <div class="DisplayCard__DisplayCardHeader-bf03i4-1 gAtRbL">
                                    <div class="main">会员卡</div><a class="extra" @click="toallCard"><span>查看全部</span><svg
                                    class="icon am-icon am-icon-arrow-right" fill="currentColor">
                                    <use xlink:href="#arrow-right"></use>
                                </svg></a>
                                </div>
                                <div>
                                    <div class="sliderList">
                                        <div class="ShopCardTemplate__CardTemplateWrapper-dnfw5k-0 dAUuPj" v-for="(item,index) in listCrad" @click="tocard_detail(item.ID)">
                                            <section class="NewCardTemplateComponent__Wrapper-sc-18n2c0i-0 cWMxiU" v-if="item.CradImgURL == ''"
                                                     style=" background: url(../../static/images/redstyle/morenka.png) 0% 0% / cover;">
                                                <div class="inner-wrapper">
                                                    <div class="card-information">
                                                        <div class="card-name fontBold">{{item.CardName}}</div>
                                                        <div class="card-duration" v-if="item.CardType == 3 || item.CardType == 1 ">有效期：{{item.yxdays}}天</div>
                                                        <div class="card-duration" v-else>有效期：不限期</div>
                                                    </div>
                                                    <div class="money-and-count"><span
                                                        class="card-money">￥{{item.SellingPrice}}</span>
                                                        <!--/<span-->
                                                        <!--class="card-count">365天</span>-->
                                                    </div>
                                                </div>
                                            </section>
                                            <section class="NewCardTemplateComponent__Wrapper-sc-18n2c0i-0 cWMxiU" v-else
                                                     :style="{backgroundImage:'url(' + item.CradImgURL + ')', backgroundRepeat:'no-repeat'}">
                                                <div class="inner-wrapper">
                                                    <div class="card-information">
                                                        <div class="card-name fontBold">{{item.CardName}}</div>
                                                        <div class="card-duration" v-if="item.CardType == 3 || item.CardType == 1 ">有效期：{{item.yxdays}}天</div>
                                                        <div class="card-duration" v-else>有效期：不限期</div>
                                                    </div>
                                                    <div class="money-and-count"><span
                                                        class="card-money">￥{{item.SellingPrice}}</span>
                                                        <!--/<span-->
                                                        <!--class="card-count">365天</span>-->
                                                    </div>
                                                </div>
                                            </section>
                                            <!--<div class="display-card-name multiLine line-2">{{item.Info}}</div>-->
                                        </div>
<!--                                        <div class="ShopCardTemplate__CardTemplateWrapper-dnfw5k-0 dAUuPj"><a-->
<!--                                            href="card_detail.html">-->
<!--                                            <section class="NewCardTemplateComponent__Wrapper-sc-18n2c0i-0 cWMxiU"-->
<!--                                                     style=" background: url(../../static/images/redstyle/card2bg.png) 0% 0% / cover, linear-gradient(303.69deg, rgb(135, 164, 206) 0%, rgb(143, 178, 226) 49.95%, rgb(171, 198, 232) 100%);">-->
<!--                                                <div class="inner-wrapper">-->
<!--                                                    <div class="card-information">-->
<!--                                                        <div class="card-name fontBold">30天不限次卡</div>-->
<!--                                                        <div class="card-duration">有效期：30天</div>-->
<!--                                                    </div>-->
<!--                                                    <div class="money-and-count"><span-->
<!--                                                        class="card-money">￥2960</span>/<span-->
<!--                                                        class="card-count">30天</span></div>-->
<!--                                                </div>-->
<!--                                            </section>-->
<!--                                            <div class="display-card-name multiLine line-2">孕期一对三私教卡</div>-->
<!--                                        </a></div>-->
<!--                                        <div class="ShopCardTemplate__CardTemplateWrapper-dnfw5k-0 dAUuPj"><a-->
<!--                                            href="card_detail.html">-->
<!--                                            <section class="NewCardTemplateComponent__Wrapper-sc-18n2c0i-0 cWMxiU"-->
<!--                                                     style=" background: url(../../static/images/redstyle/card3bg.png) 0% 0% / cover, linear-gradient(303.69deg, rgb(135, 164, 206) 0%, rgb(143, 178, 226) 49.95%, rgb(171, 198, 232) 100%);">-->
<!--                                                <div class="inner-wrapper">-->
<!--                                                    <div class="card-information">-->
<!--                                                        <div class="card-name fontBold">不限期不限次卡</div>-->
<!--                                                        <div class="card-duration">不限时间</div>-->
<!--                                                    </div>-->
<!--                                                    <div class="money-and-count"><span-->
<!--                                                        class="card-money">￥6969</span>/<span-->
<!--                                                        class="card-count">不限时间</span></div>-->
<!--                                                </div>-->
<!--                                            </section>-->
<!--                                            <div class="display-card-name multiLine line-2">小团课半年卡</div>-->
<!--                                        </a></div>-->
<!--                                        <div class="ShopCardTemplate__CardTemplateWrapper-dnfw5k-0 dAUuPj"><a-->
<!--                                            href="card_detail.html">-->
<!--                                            <section class="NewCardTemplateComponent__Wrapper-sc-18n2c0i-0 cWMxiU"-->
<!--                                                     style=" background: url(../../static/images/redstyle/card4bg.png) 0% 0% / cover, linear-gradient(303.69deg, rgb(135, 164, 206) 0%, rgb(143, 178, 226) 49.95%, rgb(171, 198, 232) 100%);">-->
<!--                                                <div class="inner-wrapper">-->
<!--                                                    <div class="card-information">-->
<!--                                                        <div class="card-name fontBold">365天8次卡</div>-->
<!--                                                        <div class="card-duration">有效期：365天</div>-->
<!--                                                    </div>-->
<!--                                                    <div class="money-and-count"><span-->
<!--                                                        class="card-money">￥1</span>/<span-->
<!--                                                        class="card-count">365天</span></div>-->
<!--                                                </div>-->
<!--                                            </section>-->
<!--                                            <div class="display-card-name multiLine line-2">体验课卡</div>-->
<!--                                        </a></div>-->
<!--                                        <div class="ShopCardTemplate__CardTemplateWrapper-dnfw5k-0 dAUuPj"><a-->
<!--                                            href="card_detail.html">-->
<!--                                            <section class="NewCardTemplateComponent__Wrapper-sc-18n2c0i-0 cWMxiU"-->
<!--                                                     style=" background: url(../../static/images/redstyle/card4bg.png) 0% 0% / cover, linear-gradient(303.69deg, rgb(135, 164, 206) 0%, rgb(143, 178, 226) 49.95%, rgb(171, 198, 232) 100%);">-->
<!--                                                <div class="inner-wrapper">-->
<!--                                                    <div class="card-information">-->
<!--                                                        <div class="card-name fontBold">100天18次卡</div>-->
<!--                                                        <div class="card-duration">有效期：100天</div>-->
<!--                                                    </div>-->
<!--                                                    <div class="money-and-count"><span-->
<!--                                                        class="card-money">￥150</span>/<span-->
<!--                                                        class="card-count">100天</span></div>-->
<!--                                                </div>-->
<!--                                            </section>-->
<!--                                            <div class="display-card-name multiLine line-2">瑜伽</div>-->
<!--                                        </a></div>-->
<!--                                        <div class="ShopCardTemplate__CardTemplateWrapper-dnfw5k-0 dAUuPj"><a-->
<!--                                            href="card_detail.html">-->
<!--                                            <section class="NewCardTemplateComponent__Wrapper-sc-18n2c0i-0 cWMxiU"-->
<!--                                                     style=" background: url(../../static/images/redstyle/card4bg.png) 0% 0% / cover, linear-gradient(303.69deg, rgb(135, 164, 206) 0%, rgb(143, 178, 226) 49.95%, rgb(171, 198, 232) 100%);">-->
<!--                                                <div class="inner-wrapper">-->
<!--                                                    <div class="card-information">-->
<!--                                                        <div class="card-name fontBold">150元储值卡</div>-->
<!--                                                        <div class="card-duration">有效期：180天</div>-->
<!--                                                    </div>-->
<!--                                                    <div class="money-and-count"><span-->
<!--                                                        class="prepaid-money">￥<span>150</span></span></div>-->
<!--                                                </div>-->
<!--                                            </section>-->
<!--                                            <div class="display-card-name multiLine line-2">瑜伽球</div>-->
<!--                                        </a></div>-->
                                    </div>
                                </div>
                            </div>
                            <div class="DisplayCard-bf03i4-0 hFQfnW">
                                <div class="DisplayCard__DisplayCardHeader-bf03i4-1 gAtRbL">
                                    <div class="main">老师</div><a class="extra" @click="toteachers"><span>查看全部</span><svg
                                    class="icon am-icon am-icon-arrow-right" fill="currentColor">
                                    <use xlink:href="#arrow-right"></use>
                                </svg></a>
                                </div>
                                <div>
                                    <div class="sliderList">
                                        <div class="ShopTeacherCard__CardWrapper-lrt5t6-0 KNCfM" v-for="(item,index) in listTeacher"
                                             @click="toteachers_detail(item.ID)">
                                            <div class="ShopTeacherCard__TeacherDetail-lrt5t6-1 hQNtrP">
                                                <div class="avatar"  v-if="item.HeadUrl != ''"><img :src="item.HeadUrl" alt=""
                                                                         style="visibility: visible;"></div>
                                                <div class="avatar" v-else><img src="../../static/images/redstyle/moren.png" alt=""
                                                                         style="visibility: visible;"></div>
                                                <span
                                                class="name oneLine">{{item.Name}}</span>
                                                <span
                                                class="experience">{{item.Title}}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="DisplayCard-bf03i4-0 hFQfnW">
                                <div class="ShopIntroduceCard__Card-k5pdv1-0 jVWYJB">
                                    <div class="gAtRbL" style="padding: 0">
                                        <div class="main" >联系我们</div>
                                    </div>
                                    <div class="text">
                                        <div class="title" style="margin-top: 0">
                                            <a class="title-wrapper">
<!--                                                <span class="name">{{htStores.StoresName}}-->
<!--                                                    &lt;!&ndash;<i class="icon am-icon am-icon-shop-photos"></i>&ndash;&gt;-->
<!--                                                </span>-->
                                            </a>
                                            <!--                                            <a href="appointment.html">-->
                                            <!--                                                <span class="change-shop color-font">切换门店-->
                                            <!--                                                    <i class="icon am-icon am-icon-reset am-icon-xs"></i>-->
                                            <!--                                                </span>-->
                                            <!--                                            </a>-->
                                        </div>
                                    </div>
                                </div>
                                <div class="ShopAddressCard__Card-sc-1gxgtn2-0 eYWaqD">
                                    <div class="text">
                                        <i class="icon am-icon am-icon-shop-location"></i>
                                        <span class="location">{{htStores.Address}}</span>
                                    </div>
                                    <div class="icons">
                                        <div class="column">
                                            <div class="ShopWechatQrCode__Wrapper-qb44ad-1 iCEWxZ">
                                                <i class="icon am-icon am-icon-wechat-icon"></i>
                                            </div>
                                        </div>
                                        <div class="divider"></div>
                                        <div class="column">
                                            <i class="icon am-icon am-icon-phone"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="EmptyHolder__BottomLineWrapper-k5v4ua-2 bnWMth"><span><span
                                class="bingcao-text"><span class="color-font">智火约课</span> 提供技术支持</span></span>
                            </div><br /><br />
                        </div>
                    </div>
                    <bottom-Bar :index="indexNum"></bottom-Bar>
<!--                    <div class="am-tabs-tab-bar-wrap" style="position:fixed;left:0;bottom:0;width:100%;z-index:99">-->
<!--                        <div class="am-tab-bar-bar bottom">-->
<!--                            <div class="am-tab-bar-tab current" onclick="javascript:window.location.href='index.html'">-->
<!--                                <div class="am-tab-bar-tab-icon">-->
<!--                                    <div class="IndexNavBar__BadgeWrapper-zp8p8u-1 fXTpFr"><i-->
<!--                                        class="icon am-icon am-icon-homepage am-icon-s"></i></div>-->
<!--                                </div>-->
<!--                                <p class="am-tab-bar-tab-title">首页</p>-->
<!--                            </div>-->
<!--                            <div class="am-tab-bar-tab" onclick="javascript:window.location.href='calendar.html'">-->
<!--                                <div class="am-tab-bar-tab-icon">-->
<!--                                    <div class="IndexNavBar__BadgeWrapper-zp8p8u-1 fXTpFr"><i-->
<!--                                        class="icon am-icon am-icon-timetable am-icon-s"></i></div>-->
<!--                                </div>-->
<!--                                <p class="am-tab-bar-tab-title">课表</p>-->
<!--                            </div>-->
<!--                            <div class="am-tab-bar-tab" onclick="javascript:window.location.href='yuyue.html'">-->
<!--                                <div class="am-tab-bar-tab-icon">-->
<!--                                    <div class="IndexNavBar__BadgeWrapper-zp8p8u-1 fXTpFr"><i-->
<!--                                        class="icon am-icon am-icon-appointment am-icon-s"></i></div>-->
<!--                                </div>-->
<!--                                <p class="am-tab-bar-tab-title">预约</p>-->
<!--                            </div>-->
<!--                            <div class="am-tab-bar-tab" onclick="javascript:window.location.href='my.html'">-->
<!--                                <div class="am-tab-bar-tab-icon">-->
<!--                                    <div class="IndexNavBar__BadgeWrapper-zp8p8u-1 fXTpFr"><i-->
<!--                                        class="icon am-icon am-icon-me am-icon-s"></i></div>-->
<!--                                </div>-->
<!--                                <p class="am-tab-bar-tab-title">我的</p>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import bottomBar from "../components/bottomBar";
    import {getHomeInfo,getListRowClassTwo,StudentLogin,getToken} from  '../api/getData'
    import { getLocal,getStore,setStore } from '@/config/mUtils';
    // import {getListRowClass} from  '../apiNew/api'
    // $(function () {
    //
    //
    // });
    // jQuery('#duice').click(function () {
    //     jQuery('.wthpop').show();
    // })
    // jQuery('.wthpop>p>span').click(function () {
    //     jQuery('.wthpop').hide()
    // })

    //tab function
    // function TabSelect(tab, con, addClass, obj) {
    //     let jQuery_self = obj;
    //     let jQuery_nav = jQuery(tab);
    //
    //     jQuery_nav.removeClass(addClass),
    //         jQuery_self.addClass(addClass);
    //
    //     let jQuery_index = jQuery_nav.index(jQuery_self);
    //     let jQuery_con = jQuery(con);
    //     jQuery_con.hide(),
    //         jQuery_con.eq(jQuery_index).show();
    // }

	export default {
		components: {bottomBar},
		data() {
			return {
			    loading:true,
                indexNum:1,
                listCourse:[],
                listCrad:[],
                listStoresImg:[],
                listTeacher:[],
                htStores:{},
                htAnnouncement:{},
                dateList:[],
                RowClassTwo:[],
                activeIndex:0,
                phone:'tel:'+getStore('Phone'),
            }
		},

		created() {
		   // this.getHomeInfo();
            if(this.$route.query.storesid){
                setStore('storesid',this.$route.query.storesid)
            };
            if(this.$route.query.openid){
                setStore('openid',this.$route.query.openid)
            };
            if(this.$route.query.templateType){
                setStore('templateType',this.$route.query.templateType)
            };
            if(getStore('token')){
                this.changeCss();
                this.getHomeInfo();
                let date = new Date();
                this.setDate(date);
            }else {
                this.StudentLogin();
            }



        },
        ready: function () {
            $(".am-tabs-default-bar-tab").on('click', function (e) {

                $(".am-tabs-default-bar-tab-active").removeClass('am-tabs-default-bar-tab-active')
                $(this).addClass('am-tabs-default-bar-tab-active')
                tabsSwiper.slideTo($(this).index())

            });
            $('.am-icon-wechat-icon,#weixinbox').click(function(){
                $('#weixinbox').toggle();
            });
            $('.am-icon-phone,#telbox .am-modal-button-group-h .am-modal-button').click(function(){
                $('#telbox').toggle();
            });
        },
		destroyed() {

		},

		mounted() {

		    this.mounth();
            $(".am-tabs-default-bar-tab").on('click', function (e) {

                $(".am-tabs-default-bar-tab-active").removeClass('am-tabs-default-bar-tab-active')
                $(this).addClass('am-tabs-default-bar-tab-active')
                tabsSwiper.slideTo($(this).index())
            });
            $('.am-icon-wechat-icon,#weixinbox').click(function(){
                $('#weixinbox').toggle();
            });
            $('.am-icon-phone,#telbox .am-modal-button-group-h .am-modal-button').click(function(){
                $('#telbox').toggle();
            });
		},
		computed: {},
		methods: {
            changeCss() {
                // let num = 1;
                // let UrlStr = window.location.href.toString();
                // console.log(UrlStr);
                // let index = UrlStr.indexOf('templateType');
                // console.log(index);
                // if(index != -1){
                //     num = UrlStr.charAt(index+13)
                // };
                if(getStore('templateType') == '1'){
                    document.getElementById('changeOne').setAttribute("href","../static/css/bluestyle.css");
                    localStorage.setItem("style","../static/css/bluestyle.css");
                }else if(getStore('templateType') == '2'){
                    document.getElementById('changeOne').setAttribute("href","../static/css/redstyle.css");
                    localStorage.setItem("style","../static/css/redstyle.css");
                }else if(getStore('templateType') == '3'){
                    document.getElementById('changeOne').setAttribute("href","../static/css/blackstyle.css");
                    localStorage.setItem("style","../static/css/blackstyle.css");
                }else {
                    document.getElementById('changeOne').setAttribute("href","../static/css/darkgreenstyle.css");
                    localStorage.setItem("style","../static/css/darkgreenstyle.css");
                }
            },


            async getToken() {
                // debugger;
                setStore('storesid',this.$route.query.storesid);
                this.loading = true;
                const crs = await getToken({
                    StoresID:this.$route.query.storesid,
                    openid:this.$route.query.openid,
                })
                if(crs.orsuccess == "1"){
                    setStore('token',crs.token);
                    this.getHomeInfo();
                    this.changeCss();
                    let date = new Date();
                    this.setDate(date);
                    setStore('StudentID',crs.StudentID);
                    setStore('openid',crs.data.openid);
                    setStore('wx_name',crs.data.wx_name);
                    setStore('wx_topimg',crs.data.wx_topimg);
                }else {
                    if(crs.Msg !='用户不存在' ){
                        this.$message({
                            message: crs.Msg,
                            type: 'error',
                            duration: 2000
                        });
                    }

                    this.$router.push({path: '/login'})
                }

            },
            async StudentLogin() {
                // debugger;
                this.loading = true;
                const crs = await StudentLogin({
                    StoresID:getStore('storesid'),
                    openid:getStore('openid')
                })
                if(crs.orsuccess == "1"){
                    setStore('token',crs.token);
                    this.getHomeInfo();
                    this.changeCss();
                    let date = new Date();
                    this.setDate(date);
                    setStore('StudentID',crs.StudentID);
                    setStore('openid',crs.data.openid);
                    setStore('wx_name',crs.data.wx_name);
                    setStore('wx_topimg',crs.data.wx_topimg);
                }else {
                    this.$message({
                        message: crs.Msg,
                        type: 'error',
                        duration: 2000
                    });
                }

            },
            formatDate(nowDate) {
                let year = nowDate.getFullYear();
                let month = (nowDate.getMonth() + 1);
                let date = nowDate.getDate();
                let week = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'][nowDate.getDay()];
                let _list = {
                    week,
                    showDate: date,
                    listDate: `${month}/${date}`,
                    sendDate: `${year}-${month}-${date}`,
                    now: nowDate.toLocaleDateString() === new Date().toLocaleDateString(),
                    tomorrow:false
                }
                // if(_list.now == true){

                // }
                return _list
            },
            addDate(date, n) {
                date.setDate(date.getDate() + n);
                return date;
            },
            setDate(date) {
                // let week = date.getDay();
                // date = this.addDate(date, week * 1);
                this.currentFirstDate = new Date(date);
                let list = []
                for (let i = 0; i < 14; i++) {
                    list.push(this.formatDate(i === 0 ? this.addDate(date, 0) : this.addDate(date, 1)));
                }
                for(let i=0;i<list.length;i++){
                    if(list[i].now == true){
                        list[i+1].tomorrow = true;
                        break
                    }
                }
                this.dateList = list;
                this.getListRowClassTwo(list[0].sendDate,0)
            },
		    mounth(){
                let tabsSwiper = new Swiper('#tabs-container', {
                    speed: 500,
                    on: {
                        slideChangeTransitionStart: function () {
                            $(".am-tabs-default-bar-tab-active").removeClass('am-tabs-default-bar-tab-active');
                            $(".am-tabs-default-bar-tab").eq(this.activeIndex).addClass('am-tabs-default-bar-tab-active');
                        }
                    }
                });
                let swiper = new Swiper('.banner11', {
                    pagination: {
                        el: '.swiper-pagination', clickable: true,
                    }, autoplay: {
                        delay: 3000,
                    },
                    loop: false,
                    slidesPerView: 1, slidesPerGroup: 1,
                    loopFillGroupWithBlank: true,
                    spaceBetween: 0, observer: true, observeParents: true,
                    slideToClickedSlide: true,
                    navigation: {
                        nextEl: '.leftbtn',
                        prevEl: '.rightbtn',
                    }

                });
            },

            tolesson(id,PreAboutID,RowClassID){
                this.$router.push({path:'/lesson',query:{id:id,type:5,PreAboutID:PreAboutID,RowClassID:RowClassID}})
            },
            toyuyue(){
                this.$router.push({path:'/yuyue'})
            },
            tocard(){
                this.$router.push({path:'/card'})
            },
            tonotice(){
                this.$router.push({path:'/notice'})
            },
            tocard_detail(id){
                this.$router.push({path:'/card_detail',query:{id:id}})
            },
            tocourses_detail(id){
                this.$router.push({path:'/courses_detail',query:{id:id}})
            },
            toannouncements(){
                this.$router.push({path:'/announcements'})
            },
            tocalendar(){
                this.$router.push({path:'/calendar'})
            },
            tocourses(){
                this.$router.push({path:'/courses'})
            },
            toallCard(){
                this.$router.push({path:'/allCard'})
            },
            toteachers(){
                this.$router.push({path:'/teachers'})
            },
            toteachers_detail(id){
                this.$router.push({path:'/teachers_detail',query:{id:id}})
            },

            async getListRowClassTwo(data,index) {
                // debugger;
                this.loading = true;
                this.activeIndex = index;
                const crs = await getListRowClassTwo({
                    StoresID:getStore('storesid'),
                    dateTime:data,
                })
                if(crs.orsuccess == "1"){

                    this.loading = false;
                    this.RowClassTwo = crs.data;
                }else {
                    this.$message({
                        message: crs.Msg,
                        type: 'error',
                        duration: 2000
                    });
                }

            },
            async getHomeInfo() {
                // debugger;
                this.loading = true;
                const crs = await getHomeInfo({
                    StoresID:getStore('storesid'),
                })
                if(crs.orsuccess == "1"){
                    this.listCourse = crs.listCourse;
                    this.listCrad = crs.listCrad;
                    if(crs.listStoresImg != []){
                        this.listStoresImg = crs.listStoresImg;
                    }else {
                        let item ={
                            ID:'999',
                            ImgUrl:'../../static/images/redstyle/lunbomoren.png',
                            addTime:'2020/12/10 15:31:01',
                        }
                        this.listStoresImg.push(item);
                    }
                    this.listTeacher = crs.listTeacher;
                    this.htStores = crs.htStores;
                    this.htAnnouncement = crs.htAnnouncement;
                    setStore('Phone',crs.htStores.Phone);
                    setStore('KFQrCode',crs.htStores.KFQrCode);
                    setStore('Address',crs.htStores.Address);
                    setStore('StoresName',crs.htStores.StoresName);
                    document.title = crs.htStores.StoresName;
                    this.loading = false;
                }else if(crs.orsuccess =='-98'){
                    this.getToken();
                } else {
                    this.loading = false;
                    this.$message({
                        message: crs.Msg,
                        type: 'error',
                        duration: 2000
                    });
                }

            },

        }
	}

</script>

<style lang="less" scoped>
    .am-tabs-default-bar-top .am-tabs-default-bar-tab{
        width:17.2%
    }
    .fourBox{
        margin-top: -10px;
        padding-bottom: 10px;
        display: flex;
        flex-direction: row;
        .fourBoxItem{
            width: 25%;
            text-align: center;
            .iconfont{
                font-size: 32px;
            }
            .fourBoxText{
                font-size: 14px;
            }
        }
    }
</style>
