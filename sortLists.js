
/**
 * 原作者 自由驱动工作室作者：林鑫
 * 无法联系到原作者
 */

/**
 * 多列通讯录,首字母检索通讯录
 * flyxz@126.com
 * freedgo@github.com
 */
$(function(){

	//如果联系人数据由ajax调用,请在此处对数据进行遍历生成HTML结构
	//服务器端生成模板请忽略

    var sortLists =$('.sort-item-list');//缓存单个列表
	//1.遍历多个联系人列表,对其进行排序
    for (j = 0 ; j < sortLists.length; j++){
	    var Initials=sortLists.eq(j).find('.initials'),//右侧字母列表
	        LetterBox=$('#letter'),
	        Lists = sortLists.eq(j).find('.sort_box');
	    //调用排序,生成字母列表
	    initials(Initials,Lists);
    }
	//2.绑定字母点击事件
	$(".initials ul li").on('click',function(){
		var _this=$(this);
		var LetterHtml=_this.html();
		LetterBox.html(LetterHtml).fadeIn();

		Initials.css('background','rgba(145,145,145,0.6)');

		setTimeout(function(){
			Initials.css('background','rgba(145,145,145,0)');
			LetterBox.fadeOut();
		},1000);

		var _index = _this.index();
		if(_index==0){
			$('html,body').animate({scrollTop: '0px'}, 300);//点击第一个滚到顶部
		}else if(_index==27){
			var DefaultTop=$('#default').position().top;
			$('html,body').animate({scrollTop: DefaultTop+'px'}, 300);//点击最后一个滚到#号
		}else{
			var letter = _this.text();
			if($('#'+letter).length>0){
				var LetterTop = $(this).parents('.sort-item-list').find('#'+letter).position().top;
				$('html,body').animate({scrollTop: LetterTop-25+'px'}, 100);
			}
		}
	})
})

/**
 * 联系人按照首字母排序
 * @param codeLists ,右侧字母列表
 * @param nameLists ,单个联系人信息
 */
function initials(codeLists,nameLists) {
	//1.建立字母列表
	codeLists.find('ul').append('<li>A</li><li>B</li><li>C</li><li>D</li><li>E</li><li>F</li><li>G</li><li>H</li><li>I</li><li>J</li><li>K</li><li>L</li><li>M</li><li>N</li><li>O</li><li>P</li><li>Q</li><li>R</li><li>S</li><li>T</li><li>U</li><li>V</li><li>W</li><li>X</li><li>Y</li><li>Z</li><li>#</li>');
	var SortBox=nameLists;//通讯录列表
        SortList=SortBox.find(".sort_list");//单个通讯录中人
        SortList.sort(asc_sort).appendTo(SortBox);//按首字母排序
        function asc_sort(a, b) {
        return makePy($(b).find('.num_name a').text().charAt(0))[0].toUpperCase() < makePy($(a).find('.num_name a').text().charAt(0))[0].toUpperCase() ? 1 : -1;
    }

	//2.遍历所有的联系人，按序列形成数组
    var initials = [];
    var num=0;
    SortList.each(function(i) {
        var initial = makePy($(this).find('.num_name a').text().charAt(0))[0].toUpperCase();
        if(initial>='A'&&initial<='Z'){
            if (initials.indexOf(initial) === -1)
                initials.push(initial);
        }else{
            num++;
        }
        
    });

	//3.遍历当前所有联系人数组，分组并添加当前联系人中有首字母标签到html'中
    $.each(initials, function(index, value) {
        SortBox.append('<div class="sort_letter" id="'+ value +'">' + value + '</div>');
    });
    if(num!=0){SortBox.append('<div class="sort_letter" id="default">#</div>');}

	//4.遍历联系人数组,插入联系人到对应的首字母分组后面
    for (var i =0;i<SortList.length;i++) {
        var letter=makePy(SortList.eq(i).find('.num_name a').text().charAt(0))[0].toUpperCase();
        switch(letter){
            case "A":
	            nameLists.find('#A').after(SortList.eq(i));
                break;
            case "B":
	            nameLists.find('#B').after(SortList.eq(i));
                break;
            case "C":
	            nameLists.find('#C').after(SortList.eq(i));
                break;
            case "D":
	            nameLists.find('#D').after(SortList.eq(i));
                break;
            case "E":
	            nameLists.find('#E').after(SortList.eq(i));
                break;
            case "F":
	            nameLists.find('#F').after(SortList.eq(i));
                break;
            case "G":
	            nameLists.find('#G').after(SortList.eq(i));
                break;
            case "H":
	            nameLists.find('#H').after(SortList.eq(i));
                break;
            case "I":
	            nameLists.find('#I').after(SortList.eq(i));
                break;
            case "J":
	            nameLists.find('#J').after(SortList.eq(i));
                break;
            case "K":
	            nameLists.find('#K').after(SortList.eq(i));
                break;
            case "L":
	            nameLists.find('#L').after(SortList.eq(i));
                break;
            case "M":
	            nameLists.find('#M').after(SortList.eq(i));
                break;
			case "N":
				nameLists.find('#N').after(SortList.eq(i));
                break;
            case "O":
	            nameLists.find('#O').after(SortList.eq(i));
                break;
            case "P":
	            nameLists.find('#P').after(SortList.eq(i));
                break;
            case "Q":
	            nameLists.find('#Q').after(SortList.eq(i));
                break;
            case "R":
	            nameLists.find('#R').after(SortList.eq(i));
                break;
            case "S":
	            nameLists.find('#S').after(SortList.eq(i));
                break;
            case "T":
	            nameLists.find('#T').after(SortList.eq(i));
                break;
            case "U":
	            nameLists.find('#U').after(SortList.eq(i));
                break;
            case "V":
	            nameLists.find('#V').after(SortList.eq(i));
                break;
            case "W":
	            nameLists.find('#W').after(SortList.eq(i));
                break;
            case "X":
	            nameLists.find('#X').after(SortList.eq(i));
                break;
            case "Y":
	            nameLists.find('#Y').after(SortList.eq(i));
                break;
            case "Z":
	            nameLists.find('#Z').after(SortList.eq(i));
                break;
            default:
	            nameLists.find('#default').after(SortList.eq(i));
                break;
        }
    };

	//5.设置字符索引数列高度为最少600px,并根据联系人多少自动调整,效果不好
	//    var codeListsHeight = parseInt(nameLists.css('height'));
	//        if (codeListsHeight < 600){
	//            codeListsHeight = 600 ;
	//        };
	//    var codeItemHeight = parseInt(codeListsHeight/28);
	//        codeLists.find('ul').css('height',codeListsHeight);
	//        codeLists.find('ul li').css('height',codeItemHeight);

	//5.设置字符索引数列高度为固定高度800px
	var codeListsHeight = 800;
        codeLists.find('ul').css('height',codeListsHeight);
        codeLists.find('ul li').css('height',800/28);
}