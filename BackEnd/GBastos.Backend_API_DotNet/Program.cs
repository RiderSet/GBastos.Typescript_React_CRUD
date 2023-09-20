using GBastos.CRUD_React_API;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<CategoryDbContext>(options => options.UseInMemoryDatabase("ContatDb"));
//builder.Services.AddDbContext<CategoryDbContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("CategoryConn")));

var app = builder.Build();
//app.UseCors(options => options.AllowAnyOrigin());

app.UseCors(policy => policy.AllowAnyHeader()
                            .AllowAnyMethod()
                            .SetIsOriginAllowed(origin => true) 
                            .AllowCredentials());

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();

app.Run();
