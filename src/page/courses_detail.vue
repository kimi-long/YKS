<template>
    <div id="root">
        <div  v-loading="loading"   element-loading-custom-class="loading_color" element-loading-spinner="el-icon-loading">
            <div class="ThemedWrapper-jd76ve-0 hnMLRX slide pop-enter-done">
                <div class="CourseShow__CourseShowWrapper-sc-150snr-0 kHCyiL">
                    <div class="CourseShow__CourseInner-sc-150snr-1 NNyrQ">
                        <div class="swiper-container banner11">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide" v-for="(item,index) in course.listSlideshow">
                                    <div class="imageWrapper"><img :src="item.ImgUrl" class="image"
                                                                   style="visibility: visible;"></div>
                                </div>
                                <!--<div class="swiper-slide">-->
                                    <!--<div class="imageWrapper"><img src="images/redstyle/2020-5-11-13-42-4.jpg" class="image"-->
                                                                   <!--style="visibility: visible;"></div>-->
                                <!--</div>-->
                                <!--<div class="swiper-slide">-->
                                    <!--<div class="imageWrapper"><img src="images/redstyle/2020-5-11-13-42-4.jpg" class="image"-->
                                                                   <!--style="visibility: visible;"></div>-->
                                <!--</div>-->
                            </div>
                            <div class="swiper-pagination"></div>
                        </div>

                        <div class="DisplayCard-bf03i4-0 hFQfnW text without-radius">
                            <div class="DisplayCard__DisplayCardHeader-bf03i4-1 gAtRbL">
                                <div class="CourseShow__Title-sc-150snr-3 bgANLh">{{course.CourseName}}</div>
                            </div>
                            <div class="row address"><span class="fontBold">等级</span><span class="content">{{course.LevelName}}</span><svg class="icon am-icon am-icon-shop-location am-icon-s"
                                                        color="#333" fill="currentColor">
                                <use xlink:href="#shop-location"></use>
                            </svg></div>
                            <div class="row level"><span class="fontBold">难度</span>
                                <div>
                                    <i
                                    class="icon am-icon Rate__IconStyled-sc-11eowge-0 fDPgoS  am-icon-xxs"
                                    :class=" course.difficulty >0 ? 'am-icon-star':'am-icon-star-none'"
                                ></i>
                                    <i
                                        class="icon am-icon Rate__IconStyled-sc-11eowge-0 fDPgoS am-icon-xxs"
                                        :class=" course.difficulty > 1 ? 'am-icon-star':'am-icon-star-none'"
                                    ></i>
                                    <i
                                        class="icon am-icon Rate__IconStyled-sc-11eowge-0 fDPgoS am-icon-xxs"
                                        :class=" course.difficulty > 2 ? 'am-icon-star':'am-icon-star-none'"
                                    ></i>
                                    <i
                                        class="icon am-icon Rate__IconStyled-sc-11eowge-0 fDPgoS am-icon-xxs"
                                        :class=" course.difficulty > 3 ? 'am-icon-star':'am-icon-star-none'"
                                    ></i>
                                    <i
                                        class="icon am-icon Rate__IconStyled-sc-11eowge-0 fDPgoS am-icon-xxs"
                                        :class=" course.difficulty > 4 ? 'am-icon-star':'am-icon-star-none'"
                                    ></i>
                                </div>
                            </div>
                        </div>
                        <div class="DisplayCard-bf03i4-0 hFQfnW without-radius">
                            <div class="DisplayCard__DisplayCardHeader-bf03i4-1 gAtRbL"><div class="main">任课老师</div></div>
                            <a v-for='(item,index) in course.listTeacher' class="description teacher" style="margin-top: 6px;"><div class="CourseShow__TeacherDetail-sc-150snr-4 jPZkjv">
                                <img :src="item.HeadUrl" style="visibility: visible;" v-if="item.HeadUrl != ''">
                                <img src="../../static/images/redstyle/moren.png" style="visibility: visible;" v-else>
                            <div class="details" style="position: relative;">
                                <div class="title"><span class="name oneLine fontBold">{{item.Name}}</span><span class="experience">{{item.Title}}</span></div><div class="introduction">{{item.Introduce}}
                                </div></div>
                                <div style="position: absolute;right:10px;">
                                    <a @click.stop="toCal(item.ID)"
                                       class="am-button CustomButton__InnerButton-sc-1u03hwt-1 dhkNjs themed radius am-button-small"
                                       aria-disabled="false" style="font-size: 15px;"><span class="inner">立即约课</span></a>
                                </div>
                            </div>

                            </a>
                        </div>
                        <div class="DisplayCard-bf03i4-0 hFQfnW without-radius">
                            <div class="DisplayCard__DisplayCardHeader-bf03i4-1 gAtRbL">
                                <div class="main">课程简介</div>
                            </div>
                            <div class="description" v-html='course.GraphicDetails'></div>
                        </div>
                        <div class="DisplayCard-bf03i4-0 hFQfnW without-radius">
                            <div class="DisplayCard__DisplayCardHeader-bf03i4-1 gAtRbL">
                                <div class="main">适合人群</div>
                            </div>
                            <div class="description">{{course.SuitsTheCrowd}}</div>
                        </div>
                        <div class="DisplayCard-bf03i4-0 hFQfnW without-radius">
                            <div class="DisplayCard__DisplayCardHeader-bf03i4-1 gAtRbL">
                                <div class="main">注意事项</div>
                            </div>
                            <div class="description">{{course.MattersNeedingAttention}}</div>
                        </div>
                    </div>
                    <div class="CourseShow__CommentsInner-sc-150snr-2 cEkybg">
                        <div class="DisplayCard-bf03i4-0 hFQfnW without-radius">
                            <div class="DisplayCard__DisplayCardHeader-bf03i4-1 gAtRbL">
                                <div class="main">用户评价</div>
                                <!--<div class="extra">-->
                                    <!--<a class="link" href="comment.html">所有评价</a><svg-->
                                    <!--class="icon am-icon am-icon-arrow-right" fill="currentColor">-->
                                    <!--<use xlink:href="#arrow-right"></use>-->
                                <!--</svg>-->
                                <!--</div>-->
                            </div>
                        </div>
                        <div v-for="(item,index) in course.listEvaluateCourse" v-if="course.listEvaluateCourse != undefined  && course.listEvaluateCourse.length >0">
                            <div class="CommentCard__CommentShow-sc-1d8hyig-0 dGHSuO">
                                <img v-if="item.isAnonymous == '1'" :src="item.HeadUrl" class="image" style="visibility: visible;">
                                <img v-else src="../../static/images/redstyle/moren.png" class="image" style="visibility: visible;">
                                <div class="text">
                                    <div class="name">
                                        <span v-if="item.isAnonymous == '2'">匿名</span>
                                        <span v-else>{{item.Name}}</span>
                                        <span class="time">{{item.addTime}}</span>
                                    </div>
                                    <div class="rate">打分<div class="level"><i
                                        class="icon am-icon Rate__IconStyled-sc-11eowge-0 fDPgoS am-icon-xxs"
                                        :class=" item.Evaluatestar >0 ? 'am-icon-star':'am-icon-star-none'"
                                    ></i>
                                        <i
                                            class="icon am-icon Rate__IconStyled-sc-11eowge-0 fDPgoS am-icon-xxs"
                                            :class=" item.Evaluatestar >1 ? 'am-icon-star':'am-icon-star-none'"
                                        ></i>
                                        <i
                                            class="icon am-icon Rate__IconStyled-sc-11eowge-0 fDPgoS am-icon-xxs"
                                            :class=" item.Evaluatestar >2 ? 'am-icon-star':'am-icon-star-none'"
                                        ></i>
                                        <i
                                            class="icon am-icon Rate__IconStyled-sc-11eowge-0 fDPgoS am-icon-xxs"
                                            :class=" item.Evaluatestar >3 ? 'am-icon-star':'am-icon-star-none'"
                                        ></i>
                                        <i
                                            class="icon am-icon Rate__IconStyled-sc-11eowge-0 fDPgoS am-icon-xxs"
                                            :class=" item.Evaluatestar >4 ? 'am-icon-star':'am-icon-star-none'"
                                        ></i>

                                    </div>
                                    </div>
                                    <div class="content">{{item.EvaluateInfo}}</div>
                                </div>
                        </div>
                        </div>
                        <div class="EmptyHolder__EmptyHolderWrapper-k5v4ua-1 dzUnVw mini" v-if="course.listEvaluateCourse == undefined || course.listEvaluateCourse.length == 0"><i
                            class="icon am-icon am-icon-new-timetable-holder"></i>
                            <div class="center">暂无评价</div>
                        </div>
                    </div>
                    <div class="EmptyHolder__BottomLineWrapper-k5v4ua-2 bnWMth hidden"><span
                        class="reach-bottom-text">已到底部</span></div>
                </div>
            </div>
            <div class="BottomActions__Wrapper-sc-1lhow6c-0 gMliAk" style="">
                <div class="tips">

                </div>
                <div class="actions">
                    <a  class="tips" @click="showTelNow"><i
                        class="icon am-icon icon am-icon-consult am-icon-s"></i><span class="text">咨询课程</span></a>
                </div>
            </div>

        </div>
        <div class="Navigation__NavigationWrapper-sc-163do31-0 heqysv react-draggable">
            <div class="Navigation__PageRedirectWrapper-sc-163do31-1 begceX">
                <div class="back" onclick="javascript:history.go(-1)"><i class="icon am-icon am-icon-index-goback am-icon-s"></i></div>
            </div>
            <div class="Navigation__PageRedirectWrapper-sc-163do31-1 begceX">
                <div class="home" @click="toIndex"><i class="icon am-icon am-icon-index-home am-icon-s"></i></div>
            </div>
        </div>
        <div class="am-modal-mask " id="telbox" v-if="showTel"><div class="am-modal-wrap " role="dialog"><div role="document" class="am-modal am-modal-transparent"><div class="am-modal-content"><div class="am-modal-body"><div><p>即将拨打:</p><br><h3>{{StoresPhone}}</h3></div></div><div class="am-modal-footer"><div class="am-modal-button-group-h am-modal-button-group-normal" role="group"><a class="am-modal-button" role="button" @click="closeTel">取消</a><a class="am-modal-button" role="button" :href="phone" @click="closeTel">确认</a></div></div></div></div></div>
        </div>
    </div>
</template>

<script>
    import {getCourseDetail,getListTeacherRowClass} from  '../api/getData'
    import { getLocal,getStore,setStore } from '@/config/mUtils';

	export default {
		components: {},
		data() {
			return {
                loading:true,
			    course:{
                },
                address:getStore('Address'),
                phone:'tel:'+getStore('Phone'),
                StoresPhone:getStore('Phone'),
                showTel: false,
            }
		},

		created() {
		    this.getCourseDetail();
		},

		destroyed() {

		},

		mounted() {
            var swiper = new Swiper('.banner11', {
                pagination: {
                    el: '.swiper-pagination', clickable: true,
                }, autoplay: {
                    delay: 3000,
                },

                loop: true,
                slidesPerView: 1, slidesPerGroup: 1,
                loop: true,
                loopFillGroupWithBlank: true,
                spaceBetween: 0, observer: true, observeParents: true,
                slideToClickedSlide: true,
                navigation: {
                    nextEl: '.leftbtn',
                    prevEl: '.rightbtn',
                }

            });
		},
		computed: {},
		methods: {
            showTelNow(){
                this.showTel = true;
            },
            closeTel(){
                this.showTel = false;
            },
            toIndex(){
                this.$router.push({path:'/',query:{storesid:getStore('storesid'),openid:getStore('openid')}})
            },
            toteachers_detail(id){
                this.$router.push({path:'/teachers_detail',query:{id:id}})
            },
            toCal(id){
                this.$router.push({path:'/yuekeCal',query:{teacherID:id}})
            },
            async getCourseDetail() {
                // debugger;
                this.loading = true;
                const crs = await getCourseDetail({
                    StoresID:getStore('storesid'),
                    CourseID: this.$route.query.id
                })
                if(crs.orsuccess == "1"){
                    this.course = crs.data;
                    this.loading = false;
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
