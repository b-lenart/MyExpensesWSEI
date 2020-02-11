using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyExpenses.Models
{
    public class ExpenseDetailContext : DbContext
    {
        public ExpenseDetailContext(DbContextOptions<ExpenseDetailContext> options) : base(options)
        {

        }

        public DbSet<ExpenseDetail> ExpenseDetails { get; set; }
    }
}
