<template>
    <div id="root">
        <div  v-loading="loading"   element-loading-custom-class="loading_color" element-loading-spinner="el-icon-loading">
            <div class="ThemedWrapper-jd76ve-0 hnMLRX slide pop-enter-done">
                <div class="CourseIndex__Wrapper-sc-19boop5-0 jEcVoX">
                    <div class="InfiniteScroller__ScrollerWrapper-x1lcuc-0 hMVrB"
                         style="height: 100vh; padding-top: 8px;">
                        <div class="CourseCard__Wrapper-s63r1y-0 hWgVYQ" @click="tocourses_detail(item.ID)" v-for="(item,index) in courseList">
                            <div class="CdnImage__ImageWithBackground-sc-1pzwnhb-0 fCJbVG cover" :style="{backgroundImage: 'url(' + item.HeadUrl + ')'}"></div>
                            <div class="summary"><span class="multiLine line-2 name"><span v-if="item.isJP=='1'"
                                class="CustomBadge__CustomBadgeWrapper-akgvp1-0 lcSuB"><span>精品课</span></span>{{item.CourseName}}</span>
                                <div class="info-wrapper">
                                    <p class="class-info">适合人群：{{item.SuitsTheCrowd}}</p>
                                    <p class="oneLine description">{{item.CourseIntroduction}}</p>
                                </div>
                            </div>
                        </div>
                        <div class="EmptyHolder__BottomLineWrapper-k5v4ua-2 bnWMth"><span
                            class="reach-bottom-text">已到底部</span></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="Navigation__NavigationWrapper-sc-163do31-0 heqysv react-draggable">
            <div class="Navigation__PageRedirectWrapper-sc-163do31-1 begceX">
                <div class="back" onclick="javascript:history.go(-1)"><i class="icon am-icon am-icon-index-goback am-icon-s"></i></div>
            </div>
            <div class="Navigation__PageRedirectWrapper-sc-163do31-1 begceX">
                <div class="home"  @click="toIndex"><i class="icon am-icon am-icon-index-home am-icon-s"></i></div>
            </div>
        </div>
    </div>
</template>

<script>
    import {getListCourse} from '../api/getData'
    import { getLocal,getStore,setStore } from '@/config/mUtils';

  export default {
    data() {
      return {
          loading:true,
          courseList:[],
      }
    },
    watch: {},
    methods: {
        tocourses_detail(id){
            this.$router.push({path:'/courses_detail',query:{id:id}})
        },
        toIndex(){
                this.$router.push({path:'/',query:{storesid:getStore('storesid'),openid:getStore('openid')}})
        },
        async getListCourse(data) {
            this.loading = true;
            const crs = await getListCourse({
                StoresID:getStore('storesid'),
            })
            if (crs.orsuccess == "1") {
                this.courseList = crs.data;
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
    },
    components: {},
    mounted() {

    },
    created() {
        this.getListCourse();
    },
    destroyed() {

    }
  }
</script>

<style lang="less" scoped>

</style>
