<template>
    <div id="root">
        <div v-loading="loading" element-loading-custom-class="loading_color" element-loading-spinner="el-icon-loading">
            <div class="ThemedWrapper-jd76ve-0 iIQNKn">
                <div class="navbarWrapper">
                    <div class="am-tab-bar">
                        <div class="am-tabs am-tabs-horizontal am-tabs-bottom">
                            <div class="am-tabs-content-wrap" style="position:relative">
                                <div class="am-tabs-pane-wrap am-tabs-pane-wrap-active">
                                    <div class="am-tab-bar-item">
                                        <div style="height:100%;position:relative">
                                            <div class="ShopCalendar__StickyTabWrapper-sc-1ovuswm-1 ggTRFk">
                                                <div class="am-tabs am-tabs-horizontal am-tabs-top">
                                                    <div class="am-tabs-tab-bar-wrap">
                                                        <div
                                                            class="am-tabs-default-bar am-tabs-default-bar-animated am-tabs-default-bar-top"
                                                        >


                                                            <div role="tablist" class="am-tabs-default-bar-content">
                                                                <div class="am-tabs-default-bar-tab"
                                                                     :class="activeIndex == 1?'am-tabs-default-bar-tab-active':''"
                                                                     @click="StuGetListPreAbout(1,1)">
                                                                    <span
                                                                        class="ShopCalendar__TabTitle-sc-1ovuswm-2 kSYPKF">已预约</span>
                                                                    <i></i>
                                                                </div>
                                                                <div class="am-tabs-default-bar-tab"
                                                                     :class="activeIndex == 2?'am-tabs-default-bar-tab-active':''"
                                                                     @click="StuGetListPreAbout(2,1)">
                                                                    <span
                                                                        class="ShopCalendar__TabTitle-sc-1ovuswm-2 kSYPKF">已完成</span>
                                                                    <i></i>
                                                                </div>
                                                                <div class="am-tabs-default-bar-tab"
                                                                     :class="activeIndex == 3?'am-tabs-default-bar-tab-active':''"
                                                                     @click="StuGetListPreAbout(3,1)">
                                                                    <span
                                                                        class="ShopCalendar__TabTitle-sc-1ovuswm-2 kSYPKF">其他</span>
                                                                    <i></i>
                                                                </div>
                                                                <div class="am-tabs-default-bar-tab"
                                                                     :class="activeIndex == 4?'am-tabs-default-bar-tab-active':''"
                                                                     @click="StuGetListPreAbout(4,1)">
                                                                    <span
                                                                        class="ShopCalendar__TabTitle-sc-1ovuswm-2 kSYPKF">未签到</span>
                                                                    <i></i>
                                                                </div>
                                                            </div>


                                                        </div>
                                                    </div>
                                                </div>


                                                <div class="list" v-if="yuyueList != undefined  && yuyueList.length > 0">
                                                    <van-list
                                                        v-model="tableLoading"
                                                        :finished="finished"
                                                        loading-text="加载中"
                                                        finished-text="已到底部"
                                                        direction="down"
                                                        :offset=10
                                                        @load="onLoad">
                                                    <div v-for="(item,index) in yuyueList"
                                                         class="CalendarLessonList__EventListWrapper-sc-1puk8r9-0 iHZEDR">
                                                        <div
                                                            @click="tolesson(item.ID,item.PreAboutID,item.RowClassID,item.state)">
                                                            <div
                                                                class="NewLessonItem__Wrapper-sc-1f60nxc-0 dddPAx new-lesson-item">
                                                                <div>
                                                                    <div
                                                                        class="NewLessonItem__MainContent-sc-1f60nxc-1 hzSaX">
                                                                        <div
                                                                            class="NewLessonItem__ImageWrapper-sc-1f60nxc-2 iFQmQO">
                                                                            <div
                                                                                class="CdnImage__ImageWithBackground-sc-1pzwnhb-0 jJXbcP image"
                                                                                :style="{backgroundImage:'url(' + item.CourseHeadUrl + ')'}">
                                                                                <span
                                                                                    class="NewLessonItem__StatusBadgeWrapper-sc-1f60nxc-4 bcgiLI"
                                                                                    v-if="activeIndex == 1 ||activeIndex == 4 ">已预约</span>
                                                                                <span
                                                                                    class="NewLessonItem__StatusBadgeWrapper-sc-1f60nxc-4 bcgiLI"
                                                                                    v-if="activeIndex == 2">已完成</span>
                                                                                <span
                                                                                    class="NewLessonItem__StatusBadgeWrapper-sc-1f60nxc-4 bcgiLI"
                                                                                    v-if="activeIndex == 3 && item.state == 0">学员取消</span>
                                                                                <span
                                                                                    class="NewLessonItem__StatusBadgeWrapper-sc-1f60nxc-4 bcgiLI"
                                                                                    v-if="activeIndex == 3 && item.state == 1">预约</span>
                                                                                <span
                                                                                    class="NewLessonItem__StatusBadgeWrapper-sc-1f60nxc-4 bcgiLI"
                                                                                    v-if="activeIndex == 3 && item.state == 2">签到</span>
                                                                                <span
                                                                                    class="NewLessonItem__StatusBadgeWrapper-sc-1f60nxc-4 bcgiLI"
                                                                                    v-if="activeIndex == 3 && item.state == 3">未到</span>
                                                                                <span
                                                                                    class="NewLessonItem__StatusBadgeWrapper-sc-1f60nxc-4 bcgiLI"
                                                                                    v-if="activeIndex == 3 && item.state == 4">机构取消</span>
                                                                                <span
                                                                                    class="NewLessonItem__StatusBadgeWrapper-sc-1f60nxc-4 bcgiLI"
                                                                                    v-if="activeIndex == 3 && item.state == 5">请假</span>
                                                                            </div>

                                                                        </div>
                                                                        <div class="text">
                                                                            <span
                                                                                class="lesson-title multiLine line-2 fontBold">
                                                                                <span
                                                                                    class="CustomBadge__CustomBadgeWrapper-akgvp1-0 lcSuB">
                                                                                    <span
                                                                                        v-if="item.RowClassType == '0'">班课</span>
                                                                                    <span
                                                                                        v-if="item.RowClassType == '1'">私教</span>
                                                                                </span>{{item.CourseName}}
                                                                            </span>
                                                                            <div
                                                                                class="NewLessonItem__CardLastRow-sc-1f60nxc-3 AcxWG">
                                                                                <div class="lesson-information">
                                                                                    <div class="lesson-time">
                                                                                        <span><span>{{item.SKtime}} {{item.startTime}}</span></span>
                                                                                    </div>
                                                                                    <div class="lesson-price">
                                                                                        <span
                                                                                            class="color-font period-count">1课时</span>
                                                                                        <span
                                                                                            class="color-font price">￥{{item.singlePrice}}</span>
                                                                                    </div>
                                                                                    <div class="teacher">
                                                                                        <span>{{item.Name}}</span></div>
                                                                                </div>
                                                                                <a
                                                                                    class="am-button CustomButton__InnerButton-sc-1u03hwt-1 dhkNjs themed mini appointment-status-button am-button-small">
                                                                                    <span class="inner"
                                                                                          v-if="activeIndex == 2">评价</span>
                                                                                    <span class="inner" v-else>详情</span>
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                    </van-list>
                                                </div>

                                                <div class="list" v-if="yuyueList.length == 0">
                                                    <div
                                                        class="CalendarLessonList__EventListWrapper-sc-1puk8r9-0 iHZEDR">

                                                        <div class="EmptyHolder__EmptyHolderWrapper-k5v4ua-1 dzUnVw">
                                                            <i class="icon am-icon am-icon-colorful-holder a2"></i>
                                                            <div class="center">暂无对应的预约<br>浏览一下其他预约吧</div>
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
                                                <!--                                                        <div class="am-tab-bar-tab"-->
                                                <!--                                                             onclick="javascript:window.location.href='calendar.html'">-->
                                                <!--                                                            <div class="am-tab-bar-tab-icon">-->
                                                <!--                                                                <div class="IndexNavBar__BadgeWrapper-zp8p8u-1 fXTpFr"><i-->
                                                <!--                                                                    class="icon am-icon am-icon-timetable am-icon-s"></i></div>-->
                                                <!--                                                            </div>-->
                                                <!--                                                            <p class="am-tab-bar-tab-title">课表</p>-->
                                                <!--                                                        </div>-->
                                                <!--                                                        <div class="am-tab-bar-tab current"-->
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
    import bottomBar from "../components/bottomBar";
    import {getToken, StudentLogin, StuGetListPreAbout} from '../api/getData'
    import {getStore, setStore} from '@/config/mUtils';

    export default {
        components: {bottomBar},
        data() {
            return {
                indexNum: 3,
                activeIndex: 1,
                yuyueList: [],
                loading: true,
                tableLoading: false,
                finished: true,
                isAdding: false,
                pageIndex:0,
            }
        },

        created() {
            if (getStore('StudentID') == '0') {
                this.$router.push({path: '/login'})
            } else {
                this.StuGetListPreAbout(1,1);
            }

        },

        destroyed() {

        },

        mounted() {

            // jQuery('#duice').click(function(){
            //     jQuery('.wthpop').show();
            // })
            // jQuery('.wthpop>p>span').click(function(){
            //     jQuery('.wthpop').hide()
            // })

        },
        computed: {},
        methods: {
            onLoad() {
                if (!this.isAdding) {
                    this.StuGetListPreAbout(this.activeIndex,2);
                }
                this.tableLoading = false;
            },
            async getToken() {
                // debugger;
                setStore('storesid', this.$route.query.storesid);
                this.loading = true;
                const crs = await getToken({
                    StoresID: this.$route.query.storesid,
                    openid: this.$route.query.openid,
                })
                if (crs.orsuccess == "1") {
                    setStore('token', crs.token);
                    setStore('StudentID', crs.StudentID);
                    setStore('openid', crs.data.openid);
                    setStore('wx_name', crs.data.wx_name);
                    setStore('wx_topimg', crs.data.wx_topimg);
                    if (getStore('StudentID') == '0') {
                        this.$router.push({path: '/login'})
                    } else {
                        this.StuGetListPreAbout(1,1);
                    }
                } else {
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
            tolesson(id, PreAboutID, RowClassID, state) {
                this.$router.push({
                    path: '/lesson',
                    query: {
                        id: id,
                        type: this.activeIndex,
                        PreAboutID: PreAboutID,
                        RowClassID: RowClassID,
                        state: state
                    }
                })
            },
            async StuGetListPreAbout(data,num) {
                if(num == 1){
                    this.pageIndex = 0;
                    this.yuyueList = [];
                }
                // debugger;
                this.pageIndex = this.pageIndex +1;
                this.loading = true;
                this.activeIndex = data;
                const crs = await StuGetListPreAbout({
                    StoresID: getStore('storesid'),
                    StudentID: getStore('StudentID'),
                    Type: data,
                    pages: this.pageIndex,
                    psize: 10,
                })
                if (crs.orsuccess == "1") {
                    if(crs.data.length != 0){
                        if(num == 1){
                            this.yuyueList = crs.data;
                            this.finished = false;
                            if(crs.data.length != 10){
                                this.finished = true;
                            }
                        }else {
                            crs.data.forEach((item,index)=>{
                                this.yuyueList.push(item);
                            })
                            if(crs.data.length != 10){
                                this.finished = true;
                            }
                        }
                    }else {
                        this.finished = true;
                    }
                    let ele = this;
                    setTimeout(() => {
                        ele.isAdding = false;
                        ele.loadingShow = false;
                        ele.listLoading = false;
                    }, 1000);
                    this.loading = false;
                } else if (crs.orsuccess == '-98') {
                    this.getToken();
                } else {
                    this.loading = false;
                    if(crs.Msg !='用户不存在' ){
                        this.$message({
                            message: crs.Msg,
                            type: 'error',
                            duration: 2000
                        });
                    }
                }

            },
        }
    }

</script>

<style lang="less" scoped>
    .am-tabs-default-bar-top .am-tabs-default-bar-tab {
        width: 25%;
    }
</style>
