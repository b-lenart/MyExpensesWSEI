using Microsoft.EntityFrameworkCore.Migrations;

namespace MyExpenses.Migrations
{
    public partial class AddTransactionType : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "TransactionType",
                table: "ExpenseDetails",
                type: "varchar(10)",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "TransactionType",
                table: "ExpenseDetails");
        }
    }
}
