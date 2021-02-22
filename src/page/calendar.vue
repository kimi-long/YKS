<template>
    <div id="root">
        <div v-loading="loading"   element-loading-custom-class="loading_color" element-loading-spinner="el-icon-loading">
            <div class="ThemedWrapper-jd76ve-0 iIQNKn">
                <div class="navbarWrapper">
                    <div class="am-tab-bar">
                        <div class="am-tabs am-tabs-horizontal am-tabs-bottom">
                            <div class="am-tabs-content-wrap" style="position:relative">
                                <div class="am-tabs-pane-wrap am-tabs-pane-wrap-active">
                                    <div class="am-tab-bar-item">
                                        <div style="height:100%;position:relative">
                                            <rili @dateChange="dateP"></rili>
                                            <section style="padding: 4px 0px; width: 100%;"></section>
                                            <bottom-Bar :index="indexNum"></bottom-Bar>
                                            <div class="ShopCalendar__StickyTabWrapper-sc-1ovuswm-1 ggTRFk">
                                                <div class="am-tabs am-tabs-horizontal am-tabs-top">
                                                    <div class="am-tabs-tab-bar-wrap">
                                                        <div class="am-tabs-default-bar am-tabs-default-bar-animated am-tabs-default-bar-top">
                                                            <div role="tablist" class="am-tabs-default-bar-content">
                                                                <div
                                                                    class="am-tabs-default-bar-tab" :class="activeIndex == 0?'am-tabs-default-bar-tab-active':''" @click="getListRowClass(0)">
                                                                    <span
                                                                        class="ShopCalendar__TabTitle-sc-1ovuswm-2 kSYPKF">全部</span>
                                                                    <i></i>
                                                                </div>
                                                                <div class="am-tabs-default-bar-tab" :class="activeIndex == 1?'am-tabs-default-bar-tab-active':''" @click="getListRowClass(1)">
                                                                    <span
                                                                        class="ShopCalendar__TabTitle-sc-1ovuswm-2 kSYPKF">班课</span>
                                                                    <i></i>
                                                                </div>
                                                                <div class="am-tabs-default-bar-tab" :class="activeIndex == 2?'am-tabs-default-bar-tab-active':''" @click="getListRowClass(2)">
                                                                    <span
                                                                        class="ShopCalendar__TabTitle-sc-1ovuswm-2 kSYPKF">私教课</span>
                                                                    <i></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="list" v-if="classList.length >0">
                                                    <div
                                                        class="CalendarLessonList__EventListWrapper-sc-1puk8r9-0 iHZEDR">
                                                        <h2 class="header">{{nowMonth}}月{{nowDay}}日的课程安排</h2>
                                                        <div>
                                                            <div v-for="(item,index) in classList">
                                                                <div v-if="item.showstate == 1"
                                                                    class="NewLessonItem__Wrapper-sc-1f60nxc-0 dddPAx new-lesson-item">
                                                                    <div>
                                                                        <div
                                                                            class="NewLessonItem__MainContent-sc-1f60nxc-1 hzSaX">
                                                                            <div
                                                                                class="NewLessonItem__ImageWrapper-sc-1f60nxc-2 iFQmQO">
                                                                                <div class="CdnImage__ImageWithBackground-sc-1pzwnhb-0 image"
                                                                                     :style="{backgroundImage: 'url(' + item.CourseHeadUrl + ')'}">
                                                                                </div><span
                                                                                class="NewLessonItem__StatusBadgeWrapper-sc-1f60nxc-4 bcgiLI">
                                                                                <span>不可约</span>
                                                                            </span>
                                                                            </div>
                                                                            <div class="text"><span
                                                                                class="lesson-title multiLine line-2 fontBold"><span
                                                                                class="CustomBadge__CustomBadgeWrapper-akgvp1-0 lcSuB">
                                                                                <span v-if="item.RowClassType == '0'">班课</span>
                                                                                <span v-if="item.RowClassType == '1'">私教</span>
                                                                            </span>{{item.CourseName}}</span>
                                                                                <div
                                                                                    class="NewLessonItem__CardLastRow-sc-1f60nxc-3 AcxWG">
                                                                                    <div class="lesson-information">
                                                                                        <div class="lesson-time">
                                                                                            <span><span>{{item.startTime}}</span></span>
                                                                                        </div>
                                                                                        <div class="lesson-price" ><span
                                                                                            class="color-font period-count">{{item.ConsumptionOfClass}}课时</span><span
                                                                                            class="color-font price" v-if="item.preAboutType == '3' || item.preAboutType == '1'">￥{{item.singlePrice}}</span>
                                                                                        </div>
                                                                                        <div class="teacher"><span>{{item.Name}}</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <span  class="NewLessonItem__StatusBadgeWrapper-sc-1f60nxc-4 bcgiLI right-side" v-if="item.showstate == 1">已结束</span>
                                                                                    <a role="button" v-if="item.showstate == 0"
                                                                                       class="am-button CustomButton__InnerButton-sc-1u03hwt-1 dhkNjs themed mini appointment-status-button am-button-small"
                                                                                       aria-disabled="false"><span
                                                                                        class="inner">预约</span></a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div v-if="item.showstate == 0"  @click="tolesson(item.ID,item.PreAboutID,item.ID)"
                                                                    class="NewLessonItem__Wrapper-sc-1f60nxc-0 dddPAx new-lesson-item">
                                                                    <div>
                                                                        <div
                                                                            class="NewLessonItem__MainContent-sc-1f60nxc-1 hzSaX">
                                                                            <div
                                                                                class="NewLessonItem__ImageWrapper-sc-1f60nxc-2 iFQmQO">
                                                                                <div class="CdnImage__ImageWithBackground-sc-1pzwnhb-0 image"
                                                                                     :style="{backgroundImage: 'url(' + item.CourseHeadUrl + ')'}">
                                                                                </div><span
                                                                                class="NewLessonItem__StatusBadgeWrapper-sc-1f60nxc-4 bcgiLI">
                                                                                <span>可预约</span>
                                                                            </span>
                                                                            </div>
                                                                            <div class="text"><span
                                                                                class="lesson-title multiLine line-2 fontBold"><span
                                                                                class="CustomBadge__CustomBadgeWrapper-akgvp1-0 lcSuB">
                                                                                <span v-if="item.RowClassType == '0'">班课</span>
                                                                                <span v-if="item.RowClassType == '1'">私教</span>
                                                                            </span>{{item.CourseName}}</span>
                                                                                <div
                                                                                    class="NewLessonItem__CardLastRow-sc-1f60nxc-3 AcxWG">
                                                                                    <div class="lesson-information">
                                                                                        <div class="lesson-time">
                                                                                            <span><span>{{item.startTime}}</span></span>
                                                                                        </div>
                                                                                        <div class="lesson-price" ><span
                                                                                            class="color-font period-count">{{item.ConsumptionOfClass}}课时</span><span
                                                                                            class="color-font price" v-if="item.preAboutType == '3' || item.preAboutType == '1'">￥{{item.singlePrice}}</span>
                                                                                        </div>
                                                                                        <div class="teacher"><span>{{item.Name}}</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <span  class="NewLessonItem__StatusBadgeWrapper-sc-1f60nxc-4 bcgiLI right-side" v-if="item.showstate == 1">已结束</span>
                                                                                    <a role="button" v-if="item.showstate == 0"
                                                                                       class="am-button CustomButton__InnerButton-sc-1u03hwt-1 dhkNjs themed mini appointment-status-button am-button-small"
                                                                                       aria-disabled="false"><span
                                                                                        class="inner">预约</span></a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>


                                                <div class="list" v-if="classList.length == 0">
                                                    <div
                                                        class="CalendarLessonList__EventListWrapper-sc-1puk8r9-0 iHZEDR">
                                                        <h2 class="header">{{nowMonth}}月{{nowDay}}日的课程安排</h2>
                                                        <div class="EmptyHolder__EmptyHolderWrapper-k5v4ua-1 dzUnVw">
                                                            <i class="icon am-icon am-icon-new-timetable-holder"></i>
                                                            <div class="center">暂无数据</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div style="height: 60px;"></div>
                                                <bottom-Bar :index="indexNum"></bottom-Bar>
<!--                                                <div class="am-tabs-tab-bar-wrap" style="position:fixed;left:0;bottom:0;width:100%;z-index:99">-->
<!--                                                    <div class="am-tab-bar-bar bottom" >-->
<!--                                                        <div class="am-tab-bar-tab"-->
<!--                                                             onclick="javascript:window.location.href='index.html'">-->
<!--                                                            <div class="am-tab-bar-tab-icon">-->
<!--                                                                <div class="IndexNavBar__BadgeWrapper-zp8p8u-1 fXTpFr"><i-->
<!--                                                                    class="icon am-icon am-icon-homepage am-icon-s"></i></div>-->
<!--                                                            </div>-->
<!--                                                            <p class="am-tab-bar-tab-title">首页</p>-->
<!--                                                        </div>-->
<!--                                                        <div class="am-tab-bar-tab  current"-->
<!--                                                             onclick="javascript:window.location.href='courses.html'">-->
<!--                                                            <div class="am-tab-bar-tab-icon">-->
<!--                                                                <div class="IndexNavBar__BadgeWrapper-zp8p8u-1 fXTpFr"><i-->
<!--                                                                    class="icon am-icon am-icon-timetable am-icon-s"></i></div>-->
<!--                                                            </div>-->
<!--                                                            <p class="am-tab-bar-tab-title">课表</p>-->
<!--                                                        </div>-->
<!--                                                        <div class="am-tab-bar-tab"-->
<!--                                                             onclick="javascript:window.location.href='yuyue.html'">-->
<!--                                                            <div class="am-tab-bar-tab-icon">-->
<!--                                                                <div class="IndexNavBar__BadgeWrapper-zp8p8u-1 fXTpFr"><i-->
<!--                                                                    class="icon am-icon am-icon-appointment am-icon-s"></i>-->
<!--                                                                </div>-->
<!--                                                            </div>-->
<!--                                                            <p class="am-tab-bar-tab-title">预约</p>-->
<!--                                                        </div>-->
<!--                                                        <div class="am-tab-bar-tab"-->
<!--                                                             onclick="javascript:window.location.href='my.html'">-->
<!--                                                            <div class="am-tab-bar-tab-icon">-->
<!--                                                                <div class="IndexNavBar__BadgeWrapper-zp8p8u-1 fXTpFr"><i-->
<!--                                                                    class="icon am-icon am-icon-me am-icon-s"></i></div>-->
<!--                                                            </div>-->
<!--                                                            <p class="am-tab-bar-tab-title">我的</p>-->
<!--                                                        </div>-->
<!--                                                    </div>-->
<!--                                                </div>-->
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import rili from './rili';
    import bottomBar from "../components/bottomBar";
    import {getListRowClass, getToken, StudentLogin} from '../api/getData'
    import { getLocal,getStore,setStore } from '@/config/mUtils';
	export default {
		components: {bottomBar,rili},
		data() {
			return {
                loading:true,
			    activeDate:'',
                indexNum:2,
                activeIndex:0,
                classList:[],
                nowMonth:'',
                nowDay:'',
            }
		},

		created() {
		    let today = new Date();
		    this.activeDate = today.getFullYear()+"-" + (today.getMonth()+1) + "-" + today.getDate();
		    this.nowMonth = (today.getMonth()+1);
		    this.nowDay = today.getDate();
		},

		destroyed() {

		},

		mounted() {
            jQuery('.am-tabs-default-bar-tab').click(function() { TabSelect(".am-tabs-default-bar-tab", "div.lists", "am-tabs-default-bar-tab-active", jQuery(this)) });
            jQuery('.am-tabs-default-bar-tab').eq(0).trigger("click");
            jQuery('#duice').click(function(){
                jQuery('.wthpop').show();
            })
            jQuery('.wthpop>p>span').click(function(){
                jQuery('.wthpop').hide()
            })

//tab function
            function TabSelect(tab,con,addClass,obj) {
                var jQuery_self = obj;
                var jQuery_nav = jQuery(tab);

                jQuery_nav.removeClass(addClass),
                    jQuery_self.addClass(addClass);

                var jQuery_index = jQuery_nav.index(jQuery_self);
                var jQuery_con = jQuery(con);
                jQuery_con.hide(),
                    jQuery_con.eq(jQuery_index).show();
            }
		},
		computed: {},
		methods: {
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
                    setStore('StudentID',crs.StudentID);
                    setStore('openid',crs.data.openid);
                    setStore('wx_name',crs.data.wx_name);
                    setStore('wx_topimg',crs.data.wx_topimg);
                    this.getListRowClass();
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
            tolesson(id,PreAboutID,RowClassID){
                this.$router.push({path:'/lesson',query:{id:id,type:5,PreAboutID:PreAboutID,RowClassID:RowClassID}})
            },
            dateP(data){
                this.activeDate = data;
                this.nowMonth = this.activeDate.substring(5,7);
                this.nowDay = this.activeDate.substring(8);
                this.getListRowClass(this.activeIndex);
            },
            async getListRowClass(data) {
                this.loading = true;
                this.activeIndex = data;
                const crs = await getListRowClass({
                    StoresID:getStore('storesid'),
                    RowClassType:this.activeIndex,
                    dateTime:this.activeDate
                })
                if (crs.orsuccess == "1") {
                    this.classList = crs.data;
                    this.loading = false;
                } else if(crs.orsuccess =='-98'){
                    this.getToken();
                }else {
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

</style>
