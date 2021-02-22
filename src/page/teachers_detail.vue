<template>
    <div id="root">
        <div v-loading="loading"   element-loading-custom-class="loading_color" element-loading-spinner="el-icon-loading">
            <div class="ThemedWrapper-jd76ve-0 hnMLRX slide pop-enter-done">

                <div class="TeacherShow__TeacherWrapper-tymvs7-0 btKtoA">
                    <div class="wrapper">
                        <div class="imageWrapper"><img :src="teacherDetail.HeadUrl" class="image"
                                                       style="visibility: visible;"></div>
                        <div class="card ">
                            <div class="avatar-wrapper"><img :src="teacherDetail.HeadUrl" class="image"
                                                             style="visibility: visible;"></div>
                            <h3 class="name">{{teacherDetail.Name}}</h3><span
                            class="experience">{{teacherDetail.Title}}</span>
                        </div>
                    </div>
                    <div class="introduction">
                        <div class="EllipsisText__EllipsisTextWrapper-sc-709ryd-0 eDgRmV">
                            <div class="multiLine line-2">个人介绍： {{teacherDetail.Introduce}}</div>
                        </div>
                    </div>
                </div>
                <section style="padding: 3px 0px; width: 100%;"></section>
                <div class="TeacherShow__Inner-tymvs7-1 ewYvyT overflowAuto">
                    <div class="DisplayCard-bf03i4-0 hFQfnW without-radius">
                        <div class="DisplayCard__DisplayCardHeader-bf03i4-1 gAtRbL">
                            <div class="main">主要授课</div>
                        </div>
                    </div>
                    <a class="TeacherShow__CourseWrapper-tymvs7-2 jnDaXt"
                       v-for="(item ,index) in teacherDetail.listCourse" @click="tocourses_detail(item.ID)">
                        <div class="CdnImage__ImageWithBackground-sc-1pzwnhb-0  image"
                             :style="{backgroundImage:'url(' + item.HeadUrl + ')'}"></div>
                        <div class="content">
                            <div class="name multiLine line-2">{{item.CourseName}}</div>
                            <div class="appointments-count">{{item.yyCount}}人预约过</div>
                        </div>
                    </a>
                </div>
                <section style="padding: 3px 0px; width: 100%;"></section>
                <div class="TeacherShow__Inner-tymvs7-1 ewYvyT">
                    <div class="DisplayCard-bf03i4-0 hFQfnW without-radius">
                        <div class="DisplayCard__DisplayCardHeader-bf03i4-1 gAtRbL">
                            <div class="main">用户评价</div>
                        </div>
                    </div>
                    <div v-for="(item,index) in teacherDetail.listEvaluateTeacher"
                         v-if="teacherDetail.listEvaluateTeacher != undefined && teacherDetail.listEvaluateTeacher.length > 0">
                        <div class="CommentCard__CommentShow-sc-1d8hyig-0 dGHSuO">
                            <img v-if="item.isAnonymous == '1'" :src="item.HeadUrl" class="image" style="visibility: visible;">
                            <img v-else src="../../static/images/redstyle/moren.png" class="image"
                                 style="visibility: visible;">
                            <div class="text">
                                <div class="name">
                                    <span v-if="item.isAnonymous == '2'">匿名</span>
                                    <span v-else>{{item.Name}}</span>
                                    <span class="time">{{item.addTime}}</span>
                                </div>
                                <div class="rate">打分
                                    <div class="level"><i
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
                    <div class="EmptyHolder__EmptyHolderWrapper-k5v4ua-1 dzUnVw mini"
                         v-if="teacherDetail.listEvaluateTeacher == undefined || teacherDetail.listEvaluateTeacher.length == 0">
                        <i class="icon am-icon am-icon-new-timetable-holder"></i>
                        <div class="center">暂无评价</div>
                    </div>
                    <div class="EmptyHolder__BottomLineWrapper-k5v4ua-2 bnWMth hidden">
                        <span class="reach-bottom-text">已到底部</span>
                    </div>

                </div>
            </div>
            <div class="BottomActions__Wrapper-sc-1lhow6c-0 gMliAk"  v-if="!commentShow" style="position: fixed !important;">
                <div class="tips"></div>
                <div class="actions">
                    <a role="button" @click="addComment"
                       class="am-button CustomButton__InnerButton-sc-1u03hwt-1 dhkNjs themed radius am-button-small"
                       aria-disabled="true"><span class="inner">评价老师</span></a></div>
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
                                            <van-switch v-model="checked" size="24px" style="position: relative;top: 6px;margin-left: 10px"/>
                                            </span>
                                </div>

                                <div>

                                    <van-radio-group v-model="radio" direction="horizontal">
                                        <span style="display: table-cell;height: 30px;vertical-align: middle;margin-right: 10px">评价类别</span>
                                        <van-radio name="1" icon-size="24px" style="position: relative;top: -4px;">好评</van-radio>
                                        <van-radio name="2" icon-size="24px" style="position: relative;top: -4px;">普通</van-radio>
                                        <van-radio name="3" icon-size="24px" style="position: relative;top: -4px;">差评</van-radio>
                                    </van-radio-group>
                                </div>


                                <div class="rate" style="text-align: left;margin-bottom: 15px">星级打分
                                    <span class="level" style="margin-left: 10px"><i
                                        class="icon am-icon Rate__IconStyled-sc-11eowge-0 fDPgoS am-icon-xxs" @click="setStar(1)"
                                        :class="ActiveEvaluatestar >0 ? 'am-icon-star':'am-icon-star-none'"
                                    ></i>
                                                <i
                                                    class="icon am-icon Rate__IconStyled-sc-11eowge-0 fDPgoS am-icon-xxs" @click="setStar(2)"
                                                    :class="ActiveEvaluatestar >1 ? 'am-icon-star':'am-icon-star-none'"
                                                ></i>
                                                <i
                                                    class="icon am-icon Rate__IconStyled-sc-11eowge-0 fDPgoS am-icon-xxs" @click="setStar(3)"
                                                    :class="ActiveEvaluatestar >2 ? 'am-icon-star':'am-icon-star-none'"
                                                ></i>
                                                <i
                                                    class="icon am-icon Rate__IconStyled-sc-11eowge-0 fDPgoS am-icon-xxs" @click="setStar(4)"
                                                    :class="ActiveEvaluatestar >3 ? 'am-icon-star':'am-icon-star-none'"
                                                ></i>
                                                <i
                                                    class="icon am-icon Rate__IconStyled-sc-11eowge-0 fDPgoS am-icon-xxs" @click="setStar(5)"
                                                    :class="ActiveEvaluatestar >4 ? 'am-icon-star':'am-icon-star-none'"
                                                ></i>

                                            </span>
                                </div>
                                <div class="am-list-item am-textarea-item am-textarea-has-count">
                                    <div class="am-textarea-control"><textarea maxlength="200" rows="3" v-model="commentValue"
                                                                               placeholder="请输入评价"></textarea>
                                    </div>
                                </div>
                                <div style="display: flex;justify-content: space-between">
                                    <a role="button" style="width: 42%;"
                                       class="am-button CustomButton__InnerButton-sc-1u03hwt-1 dhkNjs themed radius am-button-small" @click="cannnelCommment"
                                       aria-disabled="false"><span class="inner">取消</span>
                                    </a>
                                    <a role="button" style="width: 42%;"
                                       class="am-button CustomButton__InnerButton-sc-1u03hwt-1 dhkNjs themed radius am-button-small" @click="addEvaluateTeacher"
                                       aria-disabled="false"><span class="inner">确定</span>
                                    </a>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="Navigation__NavigationWrapper-sc-163do31-0 heqysv react-draggable">
            <div class="Navigation__PageRedirectWrapper-sc-163do31-1 begceX">
                <div class="back" onclick="javascript:history.go(-1)"><i
                    class="icon am-icon am-icon-index-goback am-icon-s"></i></div>
            </div>
            <div class="Navigation__PageRedirectWrapper-sc-163do31-1 begceX">
                <div class="home" @click="toIndex"><i class="icon am-icon am-icon-index-home am-icon-s"></i></div>
            </div>
        </div>
    </div>
</template>

<script>
    import {getTeacherDetail,addEvaluateTeacher} from '../api/getData'
    import {getStore} from '@/config/mUtils';

    export default {
        components: {},
        data() {
            return {
                ActiveEvaluatestar:0,
                commentShow: false,
                teacherDetail: {},
                loading: true,
                checked: false,
                commentValue: '',
                radio:"1"
            }
        },

        created() {
            this.getTeacherDetail();
        },

        destroyed() {

        },

        mounted() {

        },
        computed: {},
        methods: {
            setStar(num){
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
            cannnelCommment(){
                this.commentShow = false;
                this.commentValue = "";
            },
            toIndex() {
                this.$router.push({path: '/index'})
            },
            tocourses_detail(id) {
                this.$router.push({path: '/courses_detail', query: {id: id}})
            },
            async addEvaluateTeacher() {
                // debugger;
                this.loading = true;
                let aa= '2';
                if(!this.checked){
                    aa = '1'
                }
                const crs = await addEvaluateTeacher({
                    StoresID:getStore('storesid'),
                    StudentID:getStore('StudentID'),
                    TeacherID: this.$route.query.id,
                    EvaluateInfo: this.commentValue,
                    EvaluateType:this.radio,
                    Evaluatestar:this.ActiveEvaluatestar,
                    isAnonymous:aa,
                })
                if (crs.orsuccess == "1") {
                    this.commentShow = false;
                    this.$message({
                        message: '评价成功',
                        type: 'success',
                        duration: 2000
                    });
                    this.getTeacherDetail();
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


            async getTeacherDetail() {
                // debugger;
                this.loading = true;
                const crs = await getTeacherDetail({
                    StoresID:getStore('storesid'),
                    TeacherID: this.$route.query.id,
                })
                if (crs.orsuccess == "1") {
                    this.loading = false;
                    this.teacherDetail = crs.data;
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

</style>
