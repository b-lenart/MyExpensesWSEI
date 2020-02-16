using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MyExpenses.Models;

namespace MyExpenses.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ExpenseDetailController : ControllerBase
    {
        private readonly ExpenseDetailContext _context;

        public ExpenseDetailController(ExpenseDetailContext context)
        {
            _context = context;
        }

        [HttpGet]
        [Authorize]
        public async Task<ActionResult<IEnumerable<ExpenseDetail>>> GetExpenseDetails()
        {
            return await _context.ExpenseDetails.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<ExpenseDetail>> GetExpenseDetail(int id)
        {
            var expenseDetail = await _context.ExpenseDetails.FindAsync(id);

            if (expenseDetail == null)
            {
                return NotFound();
            }

            return expenseDetail;
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutExpenseDetail(ExpenseDetail expenseDetail)
        {
            _context.Entry(expenseDetail).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ExpenseDetailExists(expenseDetail.ExpenseId))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        [HttpPost]
        public async Task<ActionResult<ExpenseDetail>> PostExpenseDetail(ExpenseDetail expenseDetail)
        {
            _context.ExpenseDetails.Add(expenseDetail);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetExpenseDetail", new { id = expenseDetail.ExpenseId }, expenseDetail);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<ExpenseDetail>> DeleteExpenseDetail(int id)
        {
            var expenseDetail = await _context.ExpenseDetails.FindAsync(id);
            if (expenseDetail == null)
            {
                return NotFound();
            }

            _context.ExpenseDetails.Remove(expenseDetail);
            await _context.SaveChangesAsync();

            return expenseDetail;
        }

        private bool ExpenseDetailExists(int id)
        {
            return _context.ExpenseDetails.Any(e => e.ExpenseId == id);
        }
    }
}
