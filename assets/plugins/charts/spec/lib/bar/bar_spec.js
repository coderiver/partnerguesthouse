(function() {
  describe('Morris.Bar', function() {
    describe('svg structure', function() {
      var defaults;
      defaults = {
        element: 'graph',
        data: [
          {
            x: 'foo',
            y: 2,
            z: 3
          }, {
            x: 'bar',
            y: 4,
            z: 6
          }
        ],
        xkey: 'x',
        ykeys: ['y', 'z'],
        labels: ['Y', 'Z']
      };
      it('should contain a rect for each bar', function() {
        var chart;
        chart = Morris.Bar($.extend({}, defaults));
        return $('#graph').find("rect").size().should.equal(4);
      });
      it('should contain 5 grid lines', function() {
        var chart;
        chart = Morris.Bar($.extend({}, defaults));
        return $('#graph').find("path").size().should.equal(5);
      });
      return it('should contain 7 text elements', function() {
        var chart;
        chart = Morris.Bar($.extend({}, defaults));
        return $('#graph').find("text").size().should.equal(7);
      });
    });
    return describe('svg attributes', function() {
      var defaults;
      defaults = {
        element: 'graph',
        data: [
          {
            x: 'foo',
            y: 2,
            z: 3
          }, {
            x: 'bar',
            y: 4,
            z: 6
          }
        ],
        xkey: 'x',
        ykeys: ['y', 'z'],
        labels: ['Y', 'Z'],
        barColors: ['#0b62a4', '#7a92a3'],
        gridLineColor: '#aaa',
        gridStrokeWidth: 0.5,
        gridTextColor: '#888',
        gridTextSize: 12
      };
      it('should have a bar with the first default color', function() {
        var chart;
        chart = Morris.Bar($.extend({}, defaults));
        return $('#graph').find("rect[fill='#0b62a4']").size().should.equal(2);
      });
      it('should have a bar with stroke width 0', function() {
        var chart;
        chart = Morris.Bar($.extend({}, defaults));
        return $('#graph').find("rect[stroke-width='0']").size().should.equal(4);
      });
      it('should have text with configured fill color', function() {
        var chart;
        chart = Morris.Bar($.extend({}, defaults));
        return $('#graph').find("text[fill='#888888']").size().should.equal(7);
      });
      return it('should have text with configured font size', function() {
        var chart;
        chart = Morris.Bar($.extend({}, defaults));
        return $('#graph').find("text[font-size='12px']").size().should.equal(7);
      });
    });
  });

}).call(this);
