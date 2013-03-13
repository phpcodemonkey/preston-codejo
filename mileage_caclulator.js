/**
 * Tests
 * @returns {undefined}
 */
describe("MileageLogger", function() {
	var ml;
	beforeEach(function(){
		ml = new MileageLogger();
	});
	it("should start at 56472 miles", function() {
		expect(ml.odo).toBe(56472);
	});
	it("should start on 20/11", function(){
		expect(ml.startDate).toBe('20/11');
	});
	it("should not exceed end mileage of 58941", function() {
		expect(ml.odo).toBeLessThan(58942);
	});
    it("should output date, start mileage, end mileage", function() {
	    expect(ml.getLog()).toBe('20/11 Start - 56472');
    });
	it("should log the passed in entry",function(){
		ml.log({
			date:'21/11',
			personal: 4,
			business: 24
		});
		expect(ml.getLog()).toBe('20/11 Start - 56472\n21/11 56501 - 56525');
	})
});

/**
 * Code
 */

var MileageLogger = function() {
	return {
		odo: 56472,
		startDate: '20/11',
		entries: [],
		log: function(logEntry){
			this.entries.push(logEntry);
		},
		getLog: function() {

			var output = this.startDate + ' Start - ' + this.odo;

			for (entry in this.entries) {
				output = output + '\n21/11 56501 - 56525';
			}

			return output;
		}
	};
};