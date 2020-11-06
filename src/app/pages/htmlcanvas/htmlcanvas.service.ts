import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

import html2canvas from 'html2canvas';

@Injectable({
  providedIn: 'root'
})
export class HtmlcanvasService {

    private renderer: Renderer2;

    constructor(
        rendererFactory: RendererFactory2,
    ) {
        // 自定义渲染器来生成元素
        this.renderer = rendererFactory.createRenderer(null, null);
    }

  dowloadImg(elm): void {
        // 创建元素a标签进行下载
        const a = this.renderer.createElement('a');
        // 使用html2canvas将元素转换为canvas
        html2canvas(elm).then(res => {
            console.log(res.toDataURL('image/png'));
            a.download = '图片'; // 下载图片的名称
            a.href = res.toDataURL('image/png'); // 将canvas转换为base64字符串
            a.dispatchEvent(new MouseEvent('click')); // 触发a标签的点击事件（方法内部创建了一个点击事件）
        });
  }
}
