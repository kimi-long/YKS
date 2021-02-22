<template>
    <div id="root">
        <div v-loading="loading"  element-loading-custom-class="loading_color" element-loading-spinner="el-icon-loading">
            <div class="ThemedWrapper-jd76ve-0 hnMLRX slide pop-enter-done" style="padding-bottom: 50px">

                <div class="AppointmentNew__Wrapper-sc-2wkwws-0 gUBcUx">
                    <div class="CourseCard__Wrapper-s63r1y-0 hWgVYQ">
                        <div class="CdnImage__ImageWithBackground-sc-1pzwnhb-0 fCJbVG cover" @click="tocourses_detail(lessonDetail.CourseID)"
                             :style="{backgroundImage: 'url(' + lessonDetail.CourseHeadUrl + ')'}">

                        </div>
                        <div class="summary"><span class="multiLine line-2 name"><span
                            class="CustomBadge__CustomBadgeWrapper-akgvp1-0 lcSuB">
                            <span v-if="lessonDetail.RowClassType == '0'">班课</span>
                            <span v-if="lessonDetail.RowClassType == '1'">私教</span>
                        </span>{{lessonDetail.CourseName}}</span>
                            <div class="info-wrapper">
                                <div>
                                    <i
                                        class="icon am-icon Rate__IconStyled-sc-11eowge-0 fDPgoS  am-icon-xxs"
                                        :class=" lessonDetail.difficulty >0 ? 'am-icon-star':'am-icon-star-none'"
                                    ></i>
                                    <i
                                        class="icon am-icon Rate__IconStyled-sc-11eowge-0 fDPgoS am-icon-xxs"
                                        :class=" lessonDetail.difficulty > 1 ? 'am-icon-star':'am-icon-star-none'"
                                    ></i>
                                    <i
                                        class="icon am-icon Rate__IconStyled-sc-11eowge-0 fDPgoS am-icon-xxs"
                                        :class=" lessonDetail.difficulty > 2 ? 'am-icon-star':'am-icon-star-none'"
                                    ></i>
                                    <i
                                        class="icon am-icon Rate__IconStyled-sc-11eowge-0 fDPgoS am-icon-xxs"
                                        :class=" lessonDetail.difficulty > 3 ? 'am-icon-star':'am-icon-star-none'"
                                    ></i>
                                    <i
                                        class="icon am-icon Rate__IconStyled-sc-11eowge-0 fDPgoS am-icon-xxs"
                                        :class=" lessonDetail.difficulty > 4 ? 'am-icon-star':'am-icon-star-none'"
                                    ></i>
                                </div>
                                <p class="class-info">{{lessonDetail.LoginName}}</p>
                            </div>
                        </div>
                    </div>
                    <section style="padding: 3px 0px; width: 100%;"></section>
                    <div>
                        <div>
                            <div
                                class="am-notice-bar CustomNoticeBar___CustomNoticeBar-sc-2rd1gb-0 XAMAT AppointmentBuyCard__BuyCardNoticeBar-sc-2qvfg-0 hvkXoN"
                                v-if="lessonDetail.isbuyCrad == '1' && yuyueType == '5' ">
                                <div class="am-notice-bar-icon"></div>
                                <div class="am-notice-bar-content">
                                    <div class="am-notice-bar-marquee-wrap " style="overflow: hidden;">
                                        <div class="am-notice-bar-marquee"
                                             style="position: relative; right: 0px; white-space: nowrap; display: inline-block;">
                                            <span>{{lessonDetail.buyinfo}}</span></div>
                                    </div>
                                </div>
                                <div class="am-notice-bar-operation"><img
                                    src="../../static/images/redstyle/icon_close.svg"
                                    class="am-icon am-icon-cross am-icon-md"/></div>
                            </div>
<!--                            <div class="DisplayCard-bf03i4-0 hFQfnW without-radius"-->
<!--                                 v-if="lessonDetail.listMemberCard.length > 0">-->
<!--                                <div class="DisplayCard__DisplayCardHeader-bf03i4-1 gAtRbL">-->
<!--                                    <div class="main">-->
<!--                                        可用会员卡-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                                <div>-->
<!--                                    <div class="sliderList">-->
<!--                                        <div v-for="(item,index) in lessonDetail.listMemberCard" class="CardTemplateComponent__CardWrapper-sc-1slov8k-0 dAUuPj card vertical" @click='tocard_detail(item.ID)'>-->
<!--                                            <section class="NewCardTemplateComponent__Wrapper-sc-18n2c0i-0 cWMxiU" v-if="item.CradImgURL == ''"-->
<!--                                                     style=" background: url(../../static/images/redstyle/morenka.png) 0% 0% / cover;">-->
<!--                                                <div class="inner-wrapper">-->
<!--                                                    <div class="card-information">-->
<!--                                                        <div class="card-name fontBold">{{item.CardName}}</div>-->
<!--                                                        <div class="card-duration"-->
<!--                                                             v-if="item.CardType == 3 || item.CardType == 1 ">-->
<!--                                                            有效期：{{item.yxdays}}天-->
<!--                                                        </div>-->
<!--                                                        <div class="card-duration" v-else>有效期：不限期</div>-->
<!--                                                    </div>-->
<!--                                                    <div class="money-and-count"><span-->
<!--                                                        class="card-money">￥{{item.SellingPrice}}</span>-->
<!--                                                        &lt;!&ndash;/<span&ndash;&gt;-->
<!--                                                        &lt;!&ndash;class="card-count">365天</span>&ndash;&gt;-->
<!--                                                    </div>-->
<!--                                                </div>-->
<!--                                            </section>-->
<!--                                            <section v-else class="NewCardTemplateComponent__Wrapper-sc-18n2c0i-0 cWMxiU"-->
<!--                                                :style="{backgroundImage: 'url('+item.CradImgURL+')',backgroundRepeat:'no-repeat'}">-->
<!--                                                <div class="inner-wrapper">-->
<!--                                                    <div class="card-information">-->
<!--                                                        <div class="card-name fontBold">{{item.CardName}}</div>-->
<!--                                                        <div class="card-duration"-->
<!--                                                             v-if="item.CardType == 3 || item.CardType == 1 ">-->
<!--                                                            有效期：{{item.yxdays}}天-->
<!--                                                        </div>-->
<!--                                                        <div class="card-duration" v-else>有效期：不限期</div>-->
<!--                                                    </div>-->
<!--                                                    <div class="money-and-count"><span-->
<!--                                                        class="card-money">￥{{item.SellingPrice}}</span>-->
<!--                                                        &lt;!&ndash;/<span&ndash;&gt;-->
<!--                                                        &lt;!&ndash;class="card-count">365天</span>&ndash;&gt;-->
<!--                                                    </div>-->
<!--                                                </div>-->
<!--                                            </section>-->

<!--                                        </div>-->

<!--                                    </div>-->
<!--                                </div>-->
<!--                            </div>-->

                        </div>
                        <div class="AppointmentSelectLesson__Wrapper-jeb97h-0 dGCKcJ">
                            <div>
                                <div class="DisplayCard-bf03i4-0 hFQfnW without-radius">
                                    <div class="DisplayCard__DisplayCardHeader-bf03i4-1 gAtRbL without-content">
                                        <div class="main">上课时间</div>
                                        <div class="extra">

                                            <span><input class="weui-input" style="text-align:right"
                                                         :placeholder="lessonDetail.SKtime +' '+ lessonDetail.startTime"
                                                         id="time" disabled></span>
                                            <!--<i class="icon am-icon am-icon-arrow-right"></i>-->
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="DisplayCard-bf03i4-0 hFQfnW without-radius">
                            <div class="DisplayCard__DisplayCardHeader-bf03i4-1 gAtRbL without-content">
                                <div class="main">上课人数</div>
                                <div class="extra">
                                    <section class="PlusMinusInputItem__PlusMinusSelectorWrapper-sc-1bap255-0 gizqaI" v-if="lessonDetail.limitCount != 0">
                                        <span class="count">{{lessonDetail.yallcount}}</span>
                                        <span class="color-font">/{{lessonDetail.limitCount}}人</span>
                                    </section>
                                    <section class="PlusMinusInputItem__PlusMinusSelectorWrapper-sc-1bap255-0 gizqaI" v-else>
                                        <span class="count">不限人数</span>
                                    </section>
                                </div>
                            </div>
                        </div>
                        <div class="DisplayCard-bf03i4-0 hFQfnW without-radius" v-if="lessonDetail.listMUrl != undefined && lessonDetail.listMUrl.length >0" >
                            <div class="DisplayCard__DisplayCardHeader-bf03i4-1  without-content">
                                <div class="gAtRbL">
                                    <div class="main">已约会员</div>
                                </div>

                                <div class="main">
                                    <div class="iconList" style="margin: 0 20px 20px">
                                        <div v-for="(item,index) in lessonDetail.listMUrl"  style="display: inline-block">
                                            <div class="iconItem"  :style="{backgroundImage: 'url(' + item.HeadUrl + ')','background-size': '100% 100%','background-repeat':'no-repeat'}" v-if="item.HeadUrl != ''"></div>
                                            <div class="iconItem"  style="background-image: url('../../static/images/redstyle/moren.png');background-size:cover" v-if="item.HeadUrl == ''"></div>
                                        </div>
                                    </div>
                                </div>

                                <div class="extra">
<!--                                    <section class="PlusMinusInputItem__PlusMinusSelectorWrapper-sc-1bap255-0 gizqaI">-->
<!--                                        <span class="count">{{lessonDetail.yallcount}}</span>-->
<!--                                        /{{lessonDetail.limitCount}}人-->
<!--                                    </section>-->

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="EmptyHolder__BottomLineWrapper-k5v4ua-2 bnWMth fixed-position"><span
                        class="reach-bottom-text">已到底部</span></div>
                </div>
            </div>
            <div class="BottomActions__Wrapper-sc-1lhow6c-0 gMliAk" v-if="!commentShow"
                 style="position: fixed !important;">
                <div class="tips"></div>
                <div class="actions">
                    <a v-if="yuyueType == '5' && lessonDetail.isbuyCrad == '1'"  class="tips" ><i
                        class="icon am-icon icon am-icon-consult am-icon-s" id="telBu" @click="showTelNow"></i><span class="text" >立即咨询</span></a>
                    <a v-if="yuyueType == '5' && lessonDetail.isbuyCrad == '0'" role="button"
                       class="am-button CustomButton__InnerButton-sc-1u03hwt-1 dhkNjs themed radius am-button-small"
                       aria-disabled="true"><span class="inner" @click="getTime">预约课程</span></a>
<!--                    <a v-if="yuyueType == '0' && lessonDetail.isbuyCrad != '1'" role="button"-->
<!--                       class="am-button CustomButton__InnerButton-sc-1u03hwt-1 dhkNjs themed radius am-button-small"-->
<!--                       aria-disabled="true"><span class="inner">请先购买卡券</span></a>-->
                    <a v-if="yuyueType == '1'" role="button"
                       class="am-button CustomButton__InnerButton-sc-1u03hwt-1 dhkNjs themed radius am-button-small"
                       aria-disabled="true"><span class="inner" @click="cannelYuyue">取消预约</span></a>
                    <a v-if="yuyueType == '2'" role="button"
                       class="am-button CustomButton__InnerButton-sc-1u03hwt-1 dhkNjs themed radius am-button-small"
                       aria-disabled="true"><span class="inner" @click="addComment">评价课程</span></a>
                    <a v-if="yuyueType == '3' && (state == 0 || state == 4)" role="button"
                       class="am-button CustomButton__InnerButton-sc-1u03hwt-1 dhkNjs themed radius am-button-small"
                       aria-disabled="true"><span class="inner" @click="getTime">重新预约</span></a>
                    <a v-if="yuyueType == '4' && lessonDetail.isyueke == 1" role="button"
                       class="am-button CustomButton__InnerButton-sc-1u03hwt-1 dhkNjs themed radius am-button-small"
                       aria-disabled="true"><span class="inner" @click="getTime">预约课程</span></a>
                    <a v-if="yuyueType == '4' && lessonDetail.isyueke != 1" role="button"
                       class="am-button CustomButton__InnerButton-sc-1u03hwt-1 dhkNjs themed radius am-button-small  am-button-disabled"
                       aria-disabled="true"><span class="inner">您已预约</span></a>
                </div>
            </div>
        </div>
        <van-dialog v-model="show3" title="选择时间" show-cancel-button @confirm="confirmTime">
            <van-radio-group v-model="changeradio" style="margin: 10px 20px">
                <div  v-for="(item,index) in timeList" style="margin-left: 10px">
                    <van-radio :name="item.ID" style="margin-top: 5px">
<!--                            <span style="display:inline-block;width:35px;height:35px;border-radius: 50%;overflow: hidden;position: relative;top: 2px;">-->
<!--                               <img :src="item.HeadUrl" alt="" v-if="item.HeadUrl" >-->
<!--                              <img src="../../static/images/redstyle/moren.png" alt="" v-else>-->
<!--                            </span>-->
                        <span>
                                {{item.startTime}}—{{item.endTime}}
                       </span>

                    </van-radio>
                </div>


            </van-radio-group>

        </van-dialog>
        <div class="Navigation__NavigationWrapper-sc-163do31-0 heqysv react-draggable">
            <div class="Navigation__PageRedirectWrapper-sc-163do31-1 begceX">
                <div class="back" onclick="javascript:history.go(-1)"><i
                    class="icon am-icon am-icon-index-goback am-icon-s"></i></div>
            </div>
            <div class="Navigation__PageRedirectWrapper-sc-163do31-1 begceX">
                <div class="home" @click="toIndex"><i class="icon am-icon am-icon-index-home am-icon-s"></i></div>
            </div>
        </div>
        <div class="am-modal-mask" id="modintro" v-if="commentShow">
            <div class="am-modal-wrap am-modal-wrap-popup" role="dialog">
                <div role="document" style="position: fixed;"
                     class="am-modal am-modal-popup am-modal-popup-slide-up">
                    <div class="am-modal-content">
                        <div class="am-modal-body">

                            <div class="MyIntroductionEdit__TextareaWrapper-sc-1ak9571-0 iVteuK">
                                <div style="height: 30px;line-height: 30px;margin-bottom: 15px">
                                            <span style="display: table-cell;height: 30px;vertical-align: middle;">是否匿名
                                            <van-switch v-model="checked" size="24px"
                                                        style="position: relative;top: 6px;margin-left: 10px"/>
                                            </span>
                                </div>

                                <div>

                                    <van-radio-group v-model="radio" direction="horizontal">
                                                <span
                                                    style="display: table-cell;height: 30px;vertical-align: middle;margin-right: 10px">评价类别</span>
                                        <van-radio name="1" icon-size="24px"
                                                   style="position: relative;top: -4px;">好评
                                        </van-radio>
                                        <van-radio name="2" icon-size="24px"
                                                   style="position: relative;top: -4px;">普通
                                        </van-radio>
                                        <van-radio name="3" icon-size="24px"
                                                   style="position: relative;top: -4px;">差评
                                        </van-radio>
                                    </van-radio-group>
                                </div>


                                <div class="rate" style="text-align: left;margin-bottom: 15px">星级打分
                                    <span class="level" style="margin-left: 10px"><i
                                        class="icon am-icon Rate__IconStyled-sc-11eowge-0 fDPgoS am-icon-xxs"
                                        @click="setStar(1)"
                                        :class="ActiveEvaluatestar >0 ? 'am-icon-star':'am-icon-star-none'"
                                    ></i>
                                                <i
                                                    class="icon am-icon Rate__IconStyled-sc-11eowge-0 fDPgoS am-icon-xxs"
                                                    @click="setStar(2)"
                                                    :class="ActiveEvaluatestar >1 ? 'am-icon-star':'am-icon-star-none'"
                                                ></i>
                                                <i
                                                    class="icon am-icon Rate__IconStyled-sc-11eowge-0 fDPgoS am-icon-xxs"
                                                    @click="setStar(3)"
                                                    :class="ActiveEvaluatestar >2 ? 'am-icon-star':'am-icon-star-none'"
                                                ></i>
                                                <i
                                                    class="icon am-icon Rate__IconStyled-sc-11eowge-0 fDPgoS am-icon-xxs"
                                                    @click="setStar(4)"
                                                    :class="ActiveEvaluatestar >3 ? 'am-icon-star':'am-icon-star-none'"
                                                ></i>
                                                <i
                                                    class="icon am-icon Rate__IconStyled-sc-11eowge-0 fDPgoS am-icon-xxs"
                                                    @click="setStar(5)"
                                                    :class="ActiveEvaluatestar >4 ? 'am-icon-star':'am-icon-star-none'"
                                                ></i>

                                            </span>
                                </div>
                                <div class="am-list-item am-textarea-item am-textarea-has-count">
                                    <div class="am-textarea-control"><textarea maxlength="200" rows="3"
                                                                               v-model="commentValue"
                                                                               placeholder="请输入评价"></textarea>
                                    </div>
                                </div>
                                <div style="display: flex;justify-content: space-between">
                                    <a role="button" style="width: 42%;"
                                       class="am-button CustomButton__InnerButton-sc-1u03hwt-1 dhkNjs themed radius am-button-small"
                                       @click="cannnelCommment"
                                       aria-disabled="false"><span class="inner">取消</span>
                                    </a>
                                    <a role="button" style="width: 42%;"
                                       class="am-button CustomButton__InnerButton-sc-1u03hwt-1 dhkNjs themed radius am-button-small"
                                       @click="addEvaluateCourse"
                                       aria-disabled="false"><span class="inner">确定</span>
                                    </a>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="am-modal-mask " id="telbox" v-if="showTel"><div class="am-modal-wrap " role="dialog"><div role="document" class="am-modal am-modal-transparent"><div class="am-modal-content"><div class="am-modal-body"><div><p>即将拨打:</p><br><h3>{{StoresPhone}}</h3></div></div><div class="am-modal-footer"><div class="am-modal-button-group-h am-modal-button-group-normal" role="group"><a class="am-modal-button" role="button" @click="closeTel">取消</a><a class="am-modal-button" role="button" :href="phone" @click="closeTel">确认</a></div></div></div></div></div>
        </div>
    </div>
</template>

<script>
    import {
        getRowClassDetail,
        StuUpdPreAboutState,
        StuAddPreAbout,
        addEvaluateCourse,
        getstuListRowClassTime
    } from '../api/getData'
    import {Dialog} from 'vant';
    import {getStore} from '@/config/mUtils';

    export default {
        data() {
            return {
                phone:'tel:'+getStore('Phone'),
                StoresPhone:getStore('Phone'),
                ActiveEvaluatestar: 0,
                lessonDetail: {
                    listMemberCard: [],
                    listMUrl: [],
                },
                loading: true,
                commentShow: false,
                yuyueType: '0',
                checked: false,
                show3: false,
                showTel: false,
                commentValue: '',
                radio: "1",
                state:'',
                changeradio:'',
                timeList:[],
            }
        },
        watch: {},
        mounted() {
            $('#telBu,#telbox .am-modal-button-group-h .am-modal-button').click(function(){
                $('#telbox').toggle();
            });
            // $('.am-notice-bar-operation').click(function () {
            //     $('.hvkXoN.am-notice-bar').hide()
            // })

        },
        methods: {
            getTime(){
                if(this.lessonDetail.RowClassType == '1'){
                    this.getstuListRowClassTime()
                }else {
                    if(this.yuyueType =='3'){
                        this.againYuyue();
                    }else if(this.yuyueType =='4'){
                        this.onceYuyue();
                    }else if(this.yuyueType =='5'){
                        this.onceYuyue();
                    }
                }
            },
            confirmTime(){
                if(this.yuyueType =='3'){
                    this.againYuyue();
                }else if(this.yuyueType =='4'){
                    this.onceYuyue();
                }else if(this.yuyueType =='5'){
                    this.onceYuyue();
                }
            },
            showTelNow(){
                this.showTel = true;
            },
            closeTel(){
                this.showTel = false;
            },
            tocourses_detail(id){
                this.$router.push({path:'/courses_detail',query:{id:id}})
            },
            setStar(num) {
                this.ActiveEvaluatestar = num;
            },
            addComment() {
                this.ActiveEvaluatestar = 0;
                this.commentValue = "";
                this.checked = false;
                this.commentValue = '';
                this.radio = "1";
                this.commentShow = true;
            },
            cannnelCommment() {
                this.commentShow = false;
                this.commentValue = "";
            },
            async getstuListRowClassTime() {
                // debugger;
                this.loading = true;

                const crs = await getstuListRowClassTime({
                    RowClassID: this.$route.query.id,
                })
                if (crs.orsuccess == "1") {
                    this.timeList = crs.data;
                    this.changeradio = crs.data[0].ID;
                    this.show3 = true;
                    this.loading = false;
                } else {
                    this.loading = false;
                    this.$message({
                        message: crs.Msg,
                        type: 'error',
                        duration: 2000
                    });
                }
            },
            async addEvaluateCourse() {
                // debugger;
                this.loading = true;
                let aa = '2';
                if (!this.checked) {
                    aa = '1'
                }
                const crs = await addEvaluateCourse({
                    StoresID:getStore('storesid'),
                    StudentID: getStore('StudentID'),
                    RowClassID: this.$route.query.id,
                    CourseID: this.lessonDetail.CourseID,
                    EvaluateInfo: this.commentValue,
                    EvaluateType: this.radio,
                    Evaluatestar: this.ActiveEvaluatestar,
                    isAnonymous: aa,
                })
                if (crs.orsuccess == "1") {
                    this.commentShow = false;
                    this.$message({
                        message: '评价成功',
                        type: 'success',
                        duration: 2000
                    });
                    this.$router.go(-1);
                    this.loading = false;
                } else {
                    this.loading = false;
                    this.$message({
                        message: crs.Msg,
                        type: 'error',
                        duration: 2000
                    });
                }
            },

            onceYuyue() {
                if (getStore('StudentID') == '0') {
                    this.$router.push({path: '/login'})
                } else {
                    Dialog.confirm({
                        title: '通知',
                        message: '是否确认预约课程?',
                    })
                        .then(() => {
                            // on confirm
                            this.StuAddPreAboutonce();
                        })
                        .catch(() => {
                            // on cancel
                        });
                }
            },
            againYuyue() {
                Dialog.confirm({
                    title: '通知',
                    message: '是否确认重新预约?',
                })
                    .then(() => {
                        // on confirm
                        this.StuAddPreAbout();
                    })
                    .catch(() => {
                        // on cancel
                    });
            },
            cannelYuyue() {
                Dialog.confirm({
                    title: '通知',
                    message: '是否确认取消预约?',
                })
                    .then(() => {
                        // on confirm
                        this.StuUpdPreAboutState();
                    })
                    .catch(() => {
                        // on cancel
                    });
            },
            async StuAddPreAboutonce() {
                // debugger;
                this.loading = true;
                const crs = await StuAddPreAbout({
                    RowClassTimeID: this.changeradio,
                    StoresID:getStore('storesid'),
                    StudentID: getStore('StudentID'),
                    RowClassID: this.$route.query.RowClassID,
                    limitCount: this.lessonDetail.limitCount,
                    RowClassType: this.lessonDetail.RowClassType,
                })
                if (crs.orsuccess == "1") {
                    this.loading = false;
                    this.$message({
                        message: '预约成功',
                        type: 'success',
                        duration: 2000
                    });
                    this.$router.push({path: '/yuyue'});
                } else {
                    this.loading = false;
                    this.$message({
                        message: crs.Msg,
                        type: 'error',
                        duration: 2000
                    });
                }

            },
            async StuAddPreAbout() {
                // debugger;
                this.loading = true;
                const crs = await StuAddPreAbout({
                    RowClassTimeID: this.changeradio,
                    StoresID:getStore('storesid'),
                    StudentID: getStore('StudentID'),
                    PreAboutID: this.$route.query.PreAboutID,
                    RowClassID: this.$route.query.RowClassID,
                    limitCount: this.lessonDetail.limitCount,
                    RowClassType: this.lessonDetail.RowClassType,
                })
                if (crs.orsuccess == "1") {
                    this.loading = false;
                    this.$message({
                        message: '预约成功',
                        type: 'success',
                        duration: 2000
                    });
                    this.$router.push({path: '/yuyue'});
                } else {
                    this.loading = false;
                    this.$message({
                        message: crs.Msg,
                        type: 'error',
                        duration: 2000
                    });
                }

            },
            async StuUpdPreAboutState() {
                // debugger;
                this.loading = true;
                const crs = await StuUpdPreAboutState({
                    StoresID:getStore('storesid'),
                    PreAboutID: this.$route.query.PreAboutID,
                })
                if (crs.orsuccess == "1") {
                    this.loading = false;
                    this.$message({
                        message: '取消成功',
                        type: 'success',
                        duration: 2000
                    });
                    this.$router.go(-1);
                } else {
                    this.loading = false;
                    this.$message({
                        message: crs.Msg,
                        type: 'error',
                        duration: 2000
                    });
                }

            },
            tocard_detail(id) {
                this.$router.push({path: '/card_detail', query: {id: id}})
            },
            async getRowClassDetail() {
                // debugger;
                this.loading = true;
                const crs = await getRowClassDetail({
                    StoresID:getStore('storesid'),
                    RowClassID: this.$route.query.id,
                    StudentID: getStore('StudentID'),
                })
                if (crs.orsuccess == "1") {
                    this.loading = false;
                    this.lessonDetail = crs.data;
                } else {
                    this.loading = false;
                    if(crs.Msg !='用户不存在' ){
                        this.$message({
                            message: crs.Msg,
                            type: 'error',
                            duration: 2000
                        });
                    }else {
                        this.$router.push({path: '/login'})
                    }

                }

            },
            toIndex() {
                this.$router.push({path: '/'})
            },
        },
        components: {},

        created() {
            this.getRowClassDetail();
            if (this.$route.query.type) {
                this.yuyueType = this.$route.query.type;
            };
            if (this.$route.query.state) {
                this.state = this.$route.query.state;
            };


        },
        destroyed() {

        }
    }
</script>

<style scoped lang="less">
.iconItem{
    margin-right: 5px;
    display: inline-block;
    width: 35px;
    height: 35px;
    border-radius: 50%;
}
</style>
